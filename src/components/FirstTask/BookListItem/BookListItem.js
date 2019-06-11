/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const BookListItem = ({
    image,
    title,
    description,
    authors,
    publisher,
    publishedDate,
    pageCount,
    // rating,
}) => (
    <div className={styles.item}>
        <div className={styles.imgWrapper}>
            <a href="#">
                <img className={styles.image} src={image} alt={title}></img>
            </a>
        </div>

        <div className={styles.bookDescription}>
            <h2>{title}</h2>
            <p className={styles.desrciption}>{description}</p>
            <p>
                Authors:{' '}
                {authors &&
                    authors.map(author => (
                        <span key={author} className={styles.boldText}>
                            {author}
                        </span>
                    ))}
            </p>
            <p>
                Publisher: <span className={styles.boldText}>{publisher}</span>
            </p>
            <p>
                Published date:{' '}
                <span className={styles.boldText}>{publishedDate}</span>
            </p>
            <p>
                Pages: <span className={styles.boldText}>{pageCount}</span>
            </p>
            {/* <p>
                Rating: <span className={styles.boldText}>{rating}</span>
            </p> */}
        </div>
    </div>
);

BookListItem.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string),
    publisher: PropTypes.string,
    publishedDate: PropTypes.string,
    pageCount: PropTypes.number,
    // rating: PropTypes.string.isRequired,
};

BookListItem.defaultProps = {
    image: '',
    title: '',
    description: '',
    authors: [],
    publisher: '',
    publishedDate: '',
    pageCount: null,
};

export default BookListItem;
