import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'
import { createHistory, useBasename } from 'history'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import App from './components/App.js';
import AboutPage from './components/aboutPage.js';
import StartPage from './components/startPage.js';
import ContactsPage from './components/contactsPage.js';

const history = useBasename(createHistory)({ });

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={StartPage} />
      <Route path="contacts" component={ContactsPage} />
      <Route path="about" component={AboutPage} />
    </Route>
  </Router>
), document.getElementById('app'));
