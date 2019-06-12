import React, { Component } from 'react';
import PropTypes from 'prop-types';
import genres from '../genres.json';
import styles from '../styles.module.css';

class SearchForm extends Component {
    state = {
        inputValue: '',
        category: '',
    };

    onInputChange = e => {
        this.setState({ inputValue: e.target.value });
        this.props.onSubmit(e.target.value, this.state.category);
    };

    onSelectBlur = e => this.setState({ category: e.target.value });

    handleSubmit = e => {
        e.preventDefault();
        if (
            this.state.inputValue.length > 0 ||
            this.state.category.length > 0
        ) {
            this.props.onSubmit(this.state.inputValue, this.state.category);
            this.setState({ inputValue: '', category: '' });
        }
    };

    render() {
        const { inputValue, category } = this.state;

        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <input
                    className={styles.input}
                    value={inputValue}
                    onChange={this.onInputChange}
                    placeholder="find your book"
                    type="text"
                ></input>
                <select className={styles.select} onBlur={this.onSelectBlur}>
                    {genres.map(genre => (
                        <option
                            key={genre}
                            value={genre}
                            defaultValue={category}
                        >
                            {genre}
                        </option>
                    ))}
                </select>
                <input
                    className={styles.submit}
                    type="submit"
                    value="Submit"
                ></input>
            </form>
        );
    }
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
