import React from 'react';
import ReactDOM from 'react-dom';
import controller from './controller.js';
import { Container } from 'cerebral-react';
import './styles/main.css';

import App from './components/App.js';

import appMounted from './signals/appMounted.js'
import keyPressed from './signals/keyPressed.js'

controller.signal('appMounted', appMounted);
controller.signal('keyPressed', keyPressed);

ReactDOM.render(<Container controller={controller}><App /></Container>, document.querySelector("#app"));
