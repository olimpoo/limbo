import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
// import Home from '../pages/Home';
import "../assets/styles/App.scss"
import Layout from './Layout';
import Property from '../pages/Property';
import NotFound from '../pages/NotFound';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/propiedades/:porpertyId' component={Property} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
