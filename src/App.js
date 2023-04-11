
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { HashRouter,Routes,Route } from 'react-router-dom';

export default class App extends Component {
static defaultProps ={
  category: "general"
}

  render() {
    return (
      <>
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<News key='Sports' pagesize={9} category=''/>}/>
          <Route exact path='/Business' element={<News key='Business' pagesize={9} category='Business'/>}/>
          <Route exact path='/Entertainment' element={<News key='Entertainment' pagesize={9} category='Entertainment'/>}/>
          <Route exact path='/Technology' element={<News key='Technology' pagesize={9} category='Technology'/>}/>
          <Route exact path='/Sports' element={<News key='Sports' pagesize={9} category='Sports'/>}/>
          <Route exact path='/Health' element={<News key='Health' pagesize={9} category='Health'/>}/>
        </Routes>
       </HashRouter>
      </>
    )
  }
}


