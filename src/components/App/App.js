import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import BookList from '../BookList/BookList';
import data from '../data.json';
// import styles from '../styles.module.css';

class App extends Component {
    state = {};

    render() {
        return (
            <div>
                <SearchForm />
                <BookList items={data} />
            </div>
        );
    }
}

export default App;
