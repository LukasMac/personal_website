import React from 'react';
import ReactDOM from 'react-dom';
import controller from './controller.js';
import { Container } from 'cerebral-react';

import App from './components/App.js';

import appMounted from './signals/appMounted.js'

controller.signal('appMounted', appMounted);

ReactDOM.render(<Container controller={controller}><App /></Container>, document.querySelector("#app"));
