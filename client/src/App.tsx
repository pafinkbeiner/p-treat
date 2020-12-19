import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Overview from './pages/Overview';
import './App.css'

function App() {
  return (
    <div className="App secondary-color">
      <Navbar/>
      <div className="container">

        {/* TODO */}
        <div className="Row"><br/><br/><br/></div>

        <Router>
        <Switch>
            <Route path="/">
              <Overview />
            </Route>
          </Switch>
        </Router>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
