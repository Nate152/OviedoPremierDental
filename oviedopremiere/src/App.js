import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar.js'
import Footer from './Components/Footer/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Footer />
      </div>
    );
  }
}

export default App;
