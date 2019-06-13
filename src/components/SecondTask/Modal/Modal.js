/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

class Modal extends Component {
    backDropRef = createRef();

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress = e => {
        if (e.code !== 'Escape') return;
        this.props.onClose();
    };

    handleDropClick = e => {
        const { current } = this.backDropRef;

        if (current && e.target !== current) return;

        this.props.onClose();
    };

    render() {
        const { children } = this.props;
        return (
            <div
                className={styles.backdrop}
                ref={this.backDropRef}
                onClick={this.handleDropClick}
            >
                <div className={styles.modal}>{children}</div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Modal;
