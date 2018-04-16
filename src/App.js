import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/integration/react'

import LandingPageContainer from 'containers/LandingPage';
import LoginPageContainer from 'containers/LoginPage';
import DashboardPageContainer from 'containers/DashboardPage';
import PageWrapper from 'components/PageWrapper';
import configureStore from 'utils/configureStore';
import getHistory from 'utils/getHistory';
import PrivateRoute from 'containers/PrivateRoute';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

const { store, persistor } = configureStore({});

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={getHistory()}>
          <PageWrapper>
            <Route exact path="/" component={LandingPageContainer}/>
            <Route exact path="/login" component={LoginPageContainer}/>
            <PrivateRoute exact path="/dashboard" component={DashboardPageContainer}/>
          </PageWrapper>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
