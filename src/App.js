import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import LandingPageContainer from 'containers/LandingPage';
import PageWrapper from 'components/PageWrapper';
import configureStore from 'utils/configureStore';
import getHistory from 'utils/getHistory';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

const store = configureStore({});

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={getHistory()}>
        <PageWrapper>
          <Route exact path="/" component={LandingPageContainer}/>
        </PageWrapper>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
