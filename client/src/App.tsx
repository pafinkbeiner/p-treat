import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Overview from './pages/Overview';
import './App.css'
import Site from './pages/Site';
import Category from './pages/Category/Category';

function App() {
  return (
    <div className="App">

        <Router>
        <Navbar/>
          <div className="container">
          <Switch>
              <Route exact path="/">
                <Overview />
              </Route>
              <Route path="/site/:name">
                <Site />
              </Route>
              <Route path="/category/:category">
                <Category />
              </Route>
            </Switch>
            </div>
        </Router>


      <Footer/>
    </div>
  );
}

export default App;
