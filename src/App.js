// import logo from './logo.svg';
// Api key :- e741e90868ca4a55876da15d606225a4

import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  // c = 'Hitesh';
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}
