import React from 'react';
import BookListItem from '../BookListItem/BookListItem';
import styles from '../styles.module.css';

const BookList = ({ items }) => {
    const data = items.items;
    return (
        <div className={styles.container}>
            {data.map(item => (
                <BookListItem
                    key={item.id}
                    title={item.volumeInfo.title}
                    description={item.volumeInfo.description}
                    author={item.volumeInfo.author}
                    publisher={item.volumeInfo.publisher}
                    publishedDate={item.volumeInfo.publishedDate}
                    pageCount={item.volumeInfo.pageCount}
                    rating={item.volumeInfo.maturityRating}
                    image={item.volumeInfo.previewLink}
                />
            ))}
        </div>
    );
    // return 'Hello';
};

export default BookList;
