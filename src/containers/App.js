import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavTabs from '../components/NavTabs';
import Home from '../components/pages/Home/Home'

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
