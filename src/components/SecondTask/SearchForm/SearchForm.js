import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const SearchForm = ({ value, onChange, onSubmit }) => (
    <form className={styles.searchForm} onSubmit={onSubmit}>
        <input
            onChange={onChange}
            value={value}
            type="text"
            autoComplete="off"
            placeholder="Search images..."
        />
    </form>
);

export default SearchForm;

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};
