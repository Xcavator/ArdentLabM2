import React from 'react';
import ReactDOM from 'react-dom';
import './intern.css';
import Credit from './components/Credit';
import SWRIntern from './components/SWRemoteIntern';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <SWRIntern />
    <Credit />
  </div>, 
  document.getElementById('root')
);
serviceWorker.unregister();