import React from 'react';
import {  Route, IndexRoute } from "react-router";

import App from './components/App';
import Greetings from './components/Greetings';

import SignupPage from './pages/signup/SignupPage';
import Cars from './pages/Cars';
import Food from './pages/Food';
import Health from './pages/Health';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Greetings} />
        <Route path="signup" component={SignupPage} />
        <Route path="food" component={Food} />
        <Route path="cars" component={Cars} />
        <Route path="health" component={Health} />
    </Route>
);
