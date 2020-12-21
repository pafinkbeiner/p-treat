import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Overview from './pages/Overview';
import './App.css'
import Site from './pages/Site';

function App() {
  return (
    <div className="App secondary-color">
      <Navbar/>
      <div className="container">

        <Router>
        <Switch>
            <Route path="/">
              <Overview />
            </Route>
            <Route path="/site/:name">
              <Site />
            </Route>
            <Route path="/category/:category">
              
            </Route>
          </Switch>
        </Router>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
