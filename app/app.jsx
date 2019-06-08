import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

/* Import Components */
import Header from './components/Header';
import Nav from './components/Nav';
// const Shortener = require('./components/Shortener');
import Shortener from './components/Shortener';
import ShortLinkList from './components/ShortLinkList';
import Info from './components/Info';

const App = () => {
  
  return (
    <div>
      <Nav/>
      <Header/>
      <Shortener/>
      <Info/>
    </div>
    
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));