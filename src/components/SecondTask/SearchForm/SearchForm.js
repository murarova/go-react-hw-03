import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
    state = {
        value: '',
    };

    render() {
        const { value } = this.state;
        const { onSubmit } = this.props;
        return (
            <form className="searchForm">
                <input
                    onSubmit={onSubmit}
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
