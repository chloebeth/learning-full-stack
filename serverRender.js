// fetch the data from the api
// assume it does not have direct access to data 

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

// function that returns a promise
const serverRender = () =>
    axios.get(`${ config.serverUrl }/api/contests`)
        .then(resp => {
            return ReactDOMServer.renderToString( 
                <App initialContests={resp.data.contests} /> 
            );
        });

export default serverRender;
