import React from 'react';
// import { get } from 'lodash';
import BookListItem from '../BookListItem/BookListItem';
import styles from '../styles.module.css';

const BookList = ({ items }) => {
    return (
        items && (
            <div className={styles.container}>
                {items.map(item => {
                    const {
                        volumeInfo: {
                            title,
                            description,
                            authors,
                            publisher,
                            publishedDate,
                            pageCount,
                            averageRating,
                            imageLinks = {},
                        },
                    } = item;
                    return (
                        <BookListItem
                            key={item.id}
                            title={title}
                            description={description}
                            authors={authors}
                            publisher={publisher}
                            publishedDate={publishedDate}
                            pageCount={pageCount}
                            rating={averageRating}
                            image={
                                imageLinks.thumbnail ||
                                'http://books.google.com/books/content?id=bmwutRcn_TMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
                            }
                        />
                    );
                })}
            </div>
        )
    );
};

export default BookList;
