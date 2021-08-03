import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter as Router, Route} from 'react-router-dom'


import App from './App';
import About from './About';
ReactDOM.render(
    <Router>
     <Route path="About.js" exact component={About}/>
     <App />
    </Router>,
    document.getElementById('root')
);