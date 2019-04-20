import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/containers/home'
import Products from './pages/containers/products'
import Header from './header/containers/header';
import Footer from './footer/containers/footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'
// library.add(faIgloo) 9304670 9304685 margarita gonzales
class App extends Component {
  
  render() {
    return (   
      <Router>
        <React.Fragment>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}
export default App;
