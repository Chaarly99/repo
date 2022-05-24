import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import App from './components/App';

axios.defaults.baseURL = process.env.REACT_APP_BE_URL;

ReactDOM.render(<App />, document.getElementById('root'));
