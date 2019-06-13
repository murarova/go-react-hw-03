import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Gallery from '../Gallery/Gallery';
import Modal from '../Modal/Modal';
import { fetchPixabay } from '../../../services/fetch';
import styles from '../styles.module.css';

class CatsApp extends Component {
    state = {
        galleryItems: [],
        isModalOpen: false,
    };

    openModal = () => this.setState({ isModalOpen: true });

    closeModal = () => this.setState({ isModalOpen: false });

    onSubmit = query => {
        fetchPixabay(query)
            .then(FetchData =>
                this.setState({ galleryItems: FetchData.data.hits }),
            )
            .catch(err => console.log(err));
    };

    render() {
        const { galleryItems, isModalOpen } = this.state;
        return (
            <div className={styles.app}>
                <SearchForm onSubmit={this.onSubmit} />
                {galleryItems.length > 0 && (
                    <Gallery
                        galleryItems={galleryItems}
                        onClick={this.openModal}
                    />
                )}

                {isModalOpen && (
                    <Modal onClose={this.closeModal}>
                        <h2>Cats</h2>
                    </Modal>
                )}
            </div>
        );
    }
}

export default CatsApp;
