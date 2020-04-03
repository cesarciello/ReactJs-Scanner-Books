import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import BookDetails from './pages/BookDetails';

export default function Routes() {
  return (
    <Router>
      <Switch>
        {/* <Route>
          <BookDetails path="/book-details/:isbn" />
        </Route> */}
        <Route exact component={Main} path="/" />
        <Route component={BookDetails} path="/book-details/:isbn" />
      </Switch>
    </Router>
  );
}
