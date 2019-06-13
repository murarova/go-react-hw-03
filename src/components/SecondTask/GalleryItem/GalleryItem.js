import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const GalleryItem = ({
    id,
    webformatURL,
    // largeImageURL,
    likes,
    views,
    comments,
    downloads,
    tags,
    onClick,
}) => (
    <li key={id} className={styles.galleryItem}>
        <img src={webformatURL} alt={tags} />
        <div className={styles.stats}>
            <p className={styles.statsItem}>
                <i className="material-icons">thumb_up</i>
                {likes}
            </p>
            <p className={styles.statsItem}>
                <i className="material-icons">visibility</i>
                {views}
            </p>
            <p className={styles.statsItem}>
                <i className="material-icons">comment</i>
                {comments}
            </p>
            <p className={styles.statsItem}>
                <i className="material-icons">cloud_download</i>
                {downloads}
            </p>
        </div>

        <button
            type="button"
            className={styles.fullscreenButton}
            onClick={onClick}
        >
            <i className="material-icons">zoom_out_map</i>
        </button>
    </li>
);

GalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    // largeImageURL: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default GalleryItem;
