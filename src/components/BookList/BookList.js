import React from 'react';
import BookListItem from '../BookListItem/BookListItem';
import styles from '../styles.module.css';

const BookList = ({ items }) => {
    return (
        items && (
            <div className={styles.container}>
                {items.map(item => (
                    <BookListItem
                        key={item.id}
                        title={item.volumeInfo.title}
                        description={item.volumeInfo.description}
                        authors={item.volumeInfo.authors}
                        publisher={item.volumeInfo.publisher}
                        publishedDate={item.volumeInfo.publishedDate}
                        pageCount={item.volumeInfo.pageCount}
                        // rating={item.volumeInfo.maturityRating}
                        image={item.volumeInfo.previewLink}
                    />
                ))}
            </div>
        )
    );
};

export default BookList;
