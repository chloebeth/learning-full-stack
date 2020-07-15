import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.hydrate (
    <App initialContests={window.initialData.contests} />,
    document.getElementById('root')
);
