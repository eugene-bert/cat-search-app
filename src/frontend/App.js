import React from 'react';
import {Provider} from 'react-redux';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import './App.scss';
import {store} from './store';


export const App = () => {
  return (
    <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/frontend-app" component={MainPage} exact />
            </Switch>
          </Router>
    </Provider>
  );
};
