import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <Navigation/>
      </BrowserRouter>
  );
}

export default App;
