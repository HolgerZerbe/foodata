import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Redirect } from 'react-router'
import {connect} from 'react-redux';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import InfoFaq from './components/infoFaq/InfoFaq';
import CalcOffline from './components/calcOffline/CalcOffline';
import StartPage from './components/startPage/StartPage';
import NotFound from './components/notFound/NotFound';
import Search from './components/search/Search';
import Scanner from './components/scanner/Scanner';
import Results from './components/searchResults/SearchResults'


class App extends Component {


  render (){

    return (
      <Router> 
        {this.props.productFound ?
            <Redirect to="/results" /> : null}
        <div className="mainApp">
          <div className="changingAreaApp">
            <Switch>
                <Route exact path="/" component={StartPage} />
                <Route exact path="/about" component={About} />
                <Route exact path="/info" component={InfoFaq} />
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
        product: state.product,
        productFound: state.productFound,
        error: state.error,
        message: state.message
})
export default connect(mapStateToProps, null)(App);
