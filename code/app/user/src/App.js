import React, {Component} from 'react';
import './App.css';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './components/about/About';

import CalcOffline from './components/calcOffline/CalcOffline';
import StartPage from './components/startPage/StartPage';
import NotFound from './components/notFound/NotFound';
import Search from './components/search/Search';
import Scanner from './components/scanner/Scanner';
import Results from './components/searchResults/SearchResults'
import {connect} from 'react-redux';

class App extends Component {

  render (){
    return (
      <Router> 

        <div className="mainApp">
        <div className="changingAreaApp">
          <Switch>
              <Route exact path="/" component={StartPage} />
              <Route exact path="/about" component={About} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/scan" component={Scanner} />
              <Route exact path="/calc" component={CalcOffline} />
              <Route exact path="/results" component={Results} />

              <Route component={NotFound} />

          </Switch>
        </div>
          <div className="navApp">
            <Navbar />
          </div>

        </div>

        <div className="footerApp">
          <Footer />
        </div>

      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
        product: state.product
})
export default connect(mapStateToProps, null)(App);
