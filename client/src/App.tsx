import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Overview from './pages/Overview';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        
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
