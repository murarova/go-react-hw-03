import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

class SearchForm extends Component {
    state = {
        value: '',
    };

    handleChange = e => this.setState({ value: e.target.value });

    onInputSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({ value: '' });
    };

    render() {
        const { value } = this.state;
        return (
            <form className={styles.searchForm} onSubmit={this.onInputSubmit}>
                <input
                    onChange={this.handleChange}
                    value={value}
                    type="text"
                    autoComplete="off"
                    placeholder="Search images..."
                />
            </form>
        );
    }
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
