import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Overview from './pages/Overview';
import SelectedSite from './pages/SelectedSite';
import Category from './pages/Category/Category';
import './App.css'

function App() {
  return (
    <div className="App">

        <Router>
        <Navbar/>
          <div className="container">
          <Switch>
              <Route exact path="/" component={Overview}/>
              <Route path="/site/:id" component={SelectedSite}/>
              <Route path="/category/:category" component={Category}/>
            </Switch>
            </div>
        </Router>


      <Footer/>
    </div>
  );
}

export default App;
