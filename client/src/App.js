import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/navbar.component';

class MainApp extends Component {
  render() {
    return (<Router>
      <Switch>
        <Route path="/" component={Navbar} />
      </Switch>
    </Router>
    );
  }
}
export default MainApp;
