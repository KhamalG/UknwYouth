import React, {useState} from 'react';
import './App.css';
import { 
  Link, 
  BrowserRouter as Router,
  Routes, 
  Route } from "react-router-dom";
import {button} from '../src/components/button'
import './components/button.css'
import landingPage from './pages/landingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing">
          <landingPage />
        </Route>
      </Routes>
    </Router>
  )
}
 

export default App;
