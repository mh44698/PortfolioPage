import React from 'react';
import './Components/App.css';
import About from './Components/About.js'
import Home from './Components/Home.js'
import ContactInfo from './Components/ContactInfo.js'
import Header from './Components/Header.js'
import Nav from './Components/Nav.js'
import OnlineResume from './Components/OnlineResume.js'
import Projects from './Components/Projects.js'
import jsreact from './Components/react.js'



import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <header><h1>Portfolio Page for Mark Holmes</h1></header>
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/About" component = {About} />
      <Route path="/ContactInfo" component = {ContactInfo} />
      <Route path="/Header" component = {Header} />
      <Route path="/OnlineResume" component = {OnlineResume} />
      <Route path="/Projects" component = {Projects} />
      <Route path="/Projects/react" component = {jsreact} />

      </Switch>
    </div>
    </Router>
  );
}


export default App;