import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from '../GalleryItem/GalleryItem';
import styles from '../styles.module.css';

const Gallery = ({ galleryItems, onClick }) => (
    <ul className={styles.gallery}>
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
                onClick={onClick}
            />
        ))}
    </ul>
);

Gallery.propTypes = {
    galleryItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Gallery;
