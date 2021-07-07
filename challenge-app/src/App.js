import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ProjectBoard from './components/ProjectBoard';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
    <NavBar className='navbar'/>
    <Route path='/projects' component={ProjectBoard} />

    </div>
    </Router>
  );
}

export default App;
