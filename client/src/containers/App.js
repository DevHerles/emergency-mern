import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { NotificationContainer } from '../components/'
import { NotificationContainer } from '../constants/defaultValues';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}>
          <Fragment>
            <Switch>
              <InitialPath
								path={`${match.url}app`}
                authUser={user}
                component={MainRoute}
              />
							<Route path={`/login`} component={login} />
							<Redirect to="/error" />
            </Switch>
          </Fragment>
        </IntlProvider>
      </Fragment>
    );
  }
}
