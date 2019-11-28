import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render( <Application />, document.getElementById('root'));
registerServiceWorker();
