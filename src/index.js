import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
// import App from './components/FirstTask/App/App';
import CatsApp from './components/SecondTask/CatsApp/CatsApp';

ReactDOM.render(
    <Fragment>
        {/* <App /> */}
        <CatsApp />
    </Fragment>,
    document.getElementById('root'),
);
