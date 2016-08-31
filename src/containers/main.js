
import React from 'react';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';

import App from './App';
import { Router, Route } from 'react-router';
// Test data

// style
import '../style/style.scss';


function Main(props) {
  return (
    <Router history={props.history}>
      <Route path="/" component={Page1} />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
    </Router>
  );
};

export default Main;
