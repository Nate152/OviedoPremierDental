import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import Footer from './Components/Footer/Footer.js';
import HomePage from './Components/HomePage/HomePage.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <NavBar />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/About' />
      <Route exact path='/DentalServices' />
      <Route exact path='/OurOffice' />
      <Route exact path='/PatientPacket' />
      <Route exact path='/Reviews' />
      <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
