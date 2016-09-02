
import React from 'react';
import Home from './home';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import { Provider, connect } from 'react-redux';
import App from './App';
import { Router, Route, IndexRoute } from 'react-router';
// Test data

// style


function Main(props) {
  return (
    <Provider store={props.store}>
      <Router history={props.history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Main;
