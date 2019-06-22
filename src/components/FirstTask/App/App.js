import React, { Component } from 'react';
import { throttle } from 'lodash';
import { fetchItems } from '../../../services/fetch';
import SearchForm from '../SearchForm/SearchForm';
import BookList from '../BookList/BookList';
import styles from '../styles.module.css';
import Loader from '../Loader/Loader';

// const fetchItemsDebounced = debounce((...args) => {
//     console.log('request');
//     return fetchItems(...args);
// }, 300);

// const fetchItemsDebounced = debounce(fetchItems, 300);

class App extends Component {
    state = {
        searchResult: [],
        isLoading: false,
    };

    constructor(props) {
        super(props);
        this.onFormaSubmitDebounsed = throttle(this.onFormaSubmit, 2000);
    }

    onFormaSubmit = (query, genre) => {
        this.setState({ isLoading: true });

        fetchItems(query, genre)
            .then(fetchData =>
                this.setState({ searchResult: fetchData.data.items }),
            )
            // eslint-disable-next-line no-console
            .catch(err => console.log(err))
            .finally(() => this.setState({ isLoading: false }));
    };

    render() {
        const { searchResult = [], isLoading } = this.state;

        return (
            <div className={styles.wrapper}>
                <SearchForm onSubmit={this.onFormaSubmitDebounsed} />
                {isLoading && <Loader />}
                {searchResult.length > 0 && <BookList items={searchResult} />}
            </div>
        );
    }
}

export default App;
