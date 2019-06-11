/* eslint-disable no-console */
import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Gallery from '../Gallery/Gallery';
import { fetchPixabay } from '../../../services/fetch';
import styles from '../styles.module.css';

class CatsApp extends Component {
    state = {
        galleryItems: [],
    };

    onSubmit = query => {
        fetchPixabay(query)
            .then(FetchData =>
                this.setState({ galleryItems: FetchData.data.hits }),
            )
            .catch(err => console.log(err));
    };

    render() {
        const { galleryItems } = this.state;
        return (
            <div className={styles.app}>
                <SearchForm onSubmit={this.onSubmit} />
                {galleryItems.length > 0 && (
                    <Gallery galleryItems={galleryItems} />
                )}
            </div>
        );
    }
}

export default CatsApp;
