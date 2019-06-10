import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from '../GalleryItem/GalleryItem';

const Gallery = ({ items }) => (
    <ul className="gallery">
        {items.map(item => (
            <GalleryItem key={item.id} item={item} />
        ))}
    </ul>
);

Gallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
