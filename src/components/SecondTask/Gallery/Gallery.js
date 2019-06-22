import React, { Fragment, createRef, Component } from 'react';
import PropTypes from 'prop-types';
import GalleryItem from '../GalleryItem/GalleryItem';
import styles from '../styles.module.css';

class Gallery extends Component {
    gallery = createRef();

    componentDidUpdate(prevProps, prevState, snapshort) {
        const { galleryItems } = this.props;
        if (prevProps.galleryItems !== galleryItems)
            window.scrollTo({
                top: snapshort.shouldScroll,
                left: 0,
                behavior: 'smooth',
            });
    }

    getSnapshotBeforeUpdate() {
        const { offsetHeight, offsetTop } = this.gallery.current;
        const shouldScroll = offsetHeight + offsetTop;

        return { shouldScroll };
    }

    render() {
        const { galleryItems, onClick, onButtonLoadMoreClick } = this.props;
        return (
            <Fragment>
                <ul ref={this.gallery} className={styles.gallery}>
                    {galleryItems.map(item => (
                        <GalleryItem
                            key={item.id}
                            id={item.id}
                            webformatURL={item.webformatURL}
                            likes={item.likes}
                            views={item.views}
                            comments={item.comments}
                            downloads={item.downloads}
                            tags={item.tags}
                            // largeImageURL={item.largeImageURL}
                            onClick={() => onClick(item.largeImageURL)}
                        />
                    ))}
                </ul>
                <button
                    className={styles.button}
                    onClick={onButtonLoadMoreClick}
                    type="button"
                >
                    Load more
                </button>
            </Fragment>
        );
    }
}

export default Gallery;

Gallery.propTypes = {
    galleryItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClick: PropTypes.func.isRequired,
    onButtonLoadMoreClick: PropTypes.func.isRequired,
};
