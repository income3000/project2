import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import App from './App';
import About from './About';
import PoliceK from './PoliceK';
import EventData from './EventData';
ReactDOM.render(
    <Router>
        <Switch>
        <Router path="/Policek" exact component={PoliceK}/>
        <Route path="/About.js" exact component={About}/>
        <Route path="/EventData" exact component={EventData}/>
     </Switch>
     <App />
    </Router>,
    document.getElementById('root')
);