import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

const view = (
  <div>
      <App/>
  </div>
);

ReactDOM.render(view, document.querySelector('#root'));