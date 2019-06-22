import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Gallery from '../Gallery/Gallery';
import Modal from '../Modal/Modal';
import { fetchPixabay } from '../../../services/fetch';
import styles from '../styles.module.css';

class SearchPicApp extends Component {
    state = {
        galleryItems: [],
        isModalOpen: false,
        largeImageUrl: '',
        queryPage: 1,
        inputValue: '',
    };

    handleInputChange = e => this.setState({ inputValue: e.target.value });

    openModal = url => this.setState({ isModalOpen: true, largeImageUrl: url });

    closeModal = () => this.setState({ isModalOpen: false });

    onButtonLoadMoreClick = () => {
        this.setState(
            state => ({ queryPage: state.queryPage + 1 }),
            this.getQueryResult(
                this.state.inputValue,
                this.state.queryPage + 1,
            ),
        );
    };

    getQueryResult = (inputValue, queryPage) => {
        if (inputValue) {
            fetchPixabay(inputValue, queryPage)
                .then(FetchData =>
                    FetchData
                        ? this.setState(state => ({
                              galleryItems: [
                                  ...state.galleryItems,
                                  ...FetchData.data.hits,
                              ],
                          }))
                        : // eslint-disable-next-line no-alert
                          alert('Nothing found. Please repeat your search'),
                )
                // eslint-disable-next-line no-console
                .catch(err => console.log(err));
        } else {
            // eslint-disable-next-line no-alert
            alert('Please enter your query');
        }
    };

    onSubmit = e => {
        const { inputValue } = this.state;
        e.preventDefault();
        if (inputValue) {
            fetchPixabay(inputValue, 1)
                .then(FetchData =>
                    FetchData
                        ? this.setState({ galleryItems: FetchData.data.hits })
                        : // eslint-disable-next-line no-alert
                          alert('Nothing found. Please repeat your search'),
                )
                // eslint-disable-next-line no-console
                .catch(err => console.log(err));
            this.setState({ queryPage: 1 });
        } else {
            // eslint-disable-next-line no-alert
            alert('Please enter your query');
        }
    };

    render() {
        const {
            galleryItems,
            isModalOpen,
            largeImageUrl,
            inputValue,
        } = this.state;
        return (
            <div className={styles.app}>
                <SearchForm
                    onSubmit={this.onSubmit}
                    onChange={this.handleInputChange}
                    value={inputValue}
                />
                {galleryItems.length > 0 && (
                    <Gallery
                        galleryItems={galleryItems}
                        onClick={this.openModal}
                        onButtonLoadMoreClick={this.onButtonLoadMoreClick}
                    />
                )}

                {isModalOpen && (
                    <Modal
                        onClose={this.closeModal}
                        largeImageUrl={largeImageUrl}
                    />
                )}
            </div>
        );
    }
}

export default SearchPicApp;
