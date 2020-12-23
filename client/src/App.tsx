import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Overview from './pages/Overview';
import SelectedSite from './pages/SelectedSite';
import Category from './pages/Category/Category';
import './App.css'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Favorites from './pages/Favorites/Favorites';
import { Provider } from "react-redux"
import store from "./redux/store"
import Share from './pages/Share/Share';
import Settings from './pages/Settings/Settings';
import AddSite from './pages/AddSite/AddSite';
import CatOverview from "./pages/Category/CatOverview"

function App() {

    return (
      <Provider store={store}>
        <div className="App">
          
            <Router>
              <Navbar/>
              <div className="container">
              <Switch>
                  <Route exact path="/" component={Overview}/>
                  <Route path="/site/:id" component={SelectedSite}/>
                  <Route path="/category/:category" component={Category}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/register" component={Register}/>
                  <Route path="/favorites" component={Favorites}/>
                  <Route path="/share" component={Share}/>
                  <Route path="/settings" component={Settings}/>
                  <Route path="/addSite" component={AddSite} /> 
                  <Route exact path="/category" component={CatOverview} /> 
                </Switch>
                </div>
            </Router>
    
    
          <Footer/>
        </div>
      </Provider>
    );


}

export default App;
