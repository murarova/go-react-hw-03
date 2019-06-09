import React from 'react';
import genres from '../genres.json';

const SearchForm = ({ onSubmit }) => (
    <form>
        <input type="text"></input>
        <select>
            {genres.map(genre => (
                <option key={genre} value={genre}>
                    {genre}
                </option>
            ))}
        </select>
        <input type="submit" value="Submit"></input>
    </form>
);

export default SearchForm;
