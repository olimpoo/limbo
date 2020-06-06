import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
// import Home from '../pages/Home';
import Layout from './Layout';
import NotFound from '../pages/NotFound';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
