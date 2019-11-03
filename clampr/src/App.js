import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigationbar from './components/Navigationbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Breadcrumb from './components/Breadcrumb';
import WelcomeSection from './components/Jumbotron';
import FooterNavigation from './components/FooterNavigation';
import Home from './components/Home';
import Application from './components/Application';
import UseService from './components/UseService';
import PayYourself from './components/PayYourself';
import Runner from './components/Runner';
import SuccessRunner from './components/SucessRunner';
import About from './components/About';
import Contact from './components/Contact'
import Admin from './components/Admin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigationbar/>
          <Switch>
            {/* Client */}
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/use-service" component={UseService}/>
            <Route path="/pay-lto" component={PayYourself}/>
            {/* Runner */}
            <Route path="/runner" component={Runner}/>
            <Route path="/runner-success" component={SuccessRunner} />
            {/* LTO Admin */}
            <Route path="/admin" component={Admin}/>
          </Switch>
          <FooterNavigation/>
      </div>
    </BrowserRouter>
  );
}

export default App;
