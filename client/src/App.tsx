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
import Terms from './pages/Additional/Terms';
import Imprint from './pages/Additional/Imprint';
import Privacy from './pages/Additional/Privacy';
import Default from './pages/Default/Default';

function App(props: any) {

    return (
      <Provider store={store}>
        <div className="App">
          
            <Router>
              <Navbar/>
              <main className="container">
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
                  <Route exact path="/terms" component={Terms} /> 
                  <Route exact path="/imprint" component={Imprint} /> 
                  <Route exact path="/privacy" component={Privacy} /> 
                  <Route path="/" component={Default}/>
                </Switch>
                </main>
                <Footer/>
            </Router>
        </div>
      </Provider>
    );


}

export default App;
