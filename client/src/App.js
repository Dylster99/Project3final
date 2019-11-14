import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer';
import login from './components/pages/login';
import Portfolio from './components/pages/portfolio';
import contact from './components/pages/contact';
import search from './components/pages/search';
import Account from './components/pages/account';
import './css/app.css';

function App() {
  return (
  <Router>
    <div className="bg">
      <div>
        <Switch>
            <Route exact path="/" component={login} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={contact} />
            <Route exact path="/search" component={search} />
            <Route exact path="/account" component={Account} />
        </Switch>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  </Router>
  );
}

export default App;
