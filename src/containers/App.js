import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavTabs from '../components/NavTabs';
import Home from '../components/pages/Home/Home'
import Signup from '../components/pages/Signup/Signup';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
      </div>
    </Router>
  );
}

export default App;
