import React from 'react';
import ReactDOM from 'react-dom';
//import MainApp from './App';
const rootEl = document.getElementById("root");

//ReactDOM.render(<MainApp />, rootEl);

let render = () => {
  const MainApp = require('./App').default;
  ReactDOM.render(
    <MainApp />,
    rootEl
  );
};

render();
