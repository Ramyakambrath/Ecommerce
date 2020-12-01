import React from 'react';

import './App.css';

import { BrowserRouter, Route, Switch} from 'react-router-dom'

import HomeNavbar from './components/Navbar/HomeNavbar'
import HomeNavbar2 from './components/Navbar/HomeNavbar2'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/xx' component={HomeNavbar2}></Route>
        <Route exact path='/' component={Navbar}></Route>  
      </Switch>

    </BrowserRouter>

  );
}

export default App;
