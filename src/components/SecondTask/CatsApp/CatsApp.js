/* eslint-disable no-console */
import React, { Component, Fragment } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Gallery from '../Gallery/Gallery';
import { fetchCats } from '../../../services/fetch';

class CatsApp extends Component {
    state = {
        galleryItems: [],
    };

    onSubmit = query => {
        fetchCats(query)
            .then(catsData => console.log(catsData))
            .catch(err => console.log(err));
    };

    render() {
        const { galleryItems } = this.state;
        return (
            <Fragment>
                <SearchForm onSubmit={this.onSubmit} />
                {galleryItems.length > 0 && (
                    <Gallery galleryItems={galleryItems} />
                )}
            </Fragment>
        );
    }
}

export default CatsApp;
