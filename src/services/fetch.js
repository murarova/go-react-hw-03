import axios from 'axios';

const URL = 'https://www.googleapis.com/books/v1/volumes?q=';

const fetchItems = (query, genre) =>
    axios.get(`${URL}${query}+subject:${genre}`, {
        headers: {
            'Content-Type': 'text/html',
        },
    });

export default fetchItems;
