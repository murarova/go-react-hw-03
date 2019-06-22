import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './components/FirstTask/App/App';
import SearchPicApp from './components/SecondTask/SearchPicApp/SearchPicApp';

ReactDOM.render(
    <Fragment>
        <App />
        <SearchPicApp />
    </Fragment>,
    document.getElementById('root'),
);
