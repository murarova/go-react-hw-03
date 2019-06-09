import React from 'react';
import styles from '../styles.module.css';

const BookListItem = ({
    image,
    title,
    description,
    author,
    publisher,
    publishedDate,
    pageCount,
    rating,
}) => (
    <div className={styles.item}>
        <div className={styles.imgWrapper}>
            <img className={styles.image} src={image} alt={title}></img>
        </div>
        <div className={styles.bookDescription}>
            <h2>{title}</h2>
            <p className={styles.desrciption}>{description}</p>
            <p>{author}</p>
            <p>{publisher}</p>
            <p>{publishedDate}</p>
            <p>{pageCount}</p>
            <p>{rating}</p>
        </div>
    </div>
);

export default BookListItem;
