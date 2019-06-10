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
}) => (
    <li key={id} className={styles.galleryItem}>
        <img src={webformatURL} alt={tags} />
        <div className={styles.stats}>
            <p className="stats-item">
                <i className={styles.materialIcons}>thumb_up</i>
                {likes}
            </p>
            <p className={styles.statsItem}>
                <i className={styles.materialIcons}>visibility</i>
                {views}
            </p>
            <p className={styles.statsItem}>
                <i className={styles.materialIcons}>comment</i>
                {comments}
            </p>
            <p className={styles.statsItem}>
                <i className={styles.materialIcons}>cloud_download</i>
                {downloads}
            </p>
        </div>

        <button type="button" className={styles.fullscreenButton}>
            <i className={styles.materialIcons}>zoom_out_map</i>
        </button>
    </li>
);

GalleryItem.propTypes = {
    id: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    // largeImageURL: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    downloads: PropTypes.number.isRequired,
    tags: PropTypes.number.isRequired,
};

export default GalleryItem;
