import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import App from './components/App.js';
import AboutPage from './components/aboutPage.js';
import StartPage from './components/startPage.js';
import ContactsPage from './components/contactsPage.js';

var createHistory = require('history').createHistory;
var history = createHistory()

render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={StartPage} />
      <Route path="contacts" component={ContactsPage} />
      <Route path="about" component={AboutPage} />
    </Route>
  </Router>
), document.getElementById('app'));
