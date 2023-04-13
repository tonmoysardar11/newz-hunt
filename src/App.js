
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  api = process.env.REACT_APP_NEWZ_API
  static defaultProps = {
    category: 'general'
  }
  state = {
    progress: 0
  }
  setProgress = (newProgress) => {
    this.setState({ progress: newProgress })
  }

  render() {
    return (
      <>
        <HashRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            width='1vh'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} api={this.api} key='Sports' pagesize={9} category='General' />} />
            <Route exact path='/Business' element={<News setProgress={this.setProgress} api={this.api} key='Business' pagesize={9} category='Business' />} />
            <Route exact path='/Entertainment' element={<News setProgress={this.setProgress} api={this.api} key='Entertainment' pagesize={9} category='Entertainment' />} />
            <Route exact path='/Technology' element={<News setProgress={this.setProgress} api={this.api} key='Technology' pagesize={9} category='Technology' />} />
            <Route exact path='/Sports' element={<News setProgress={this.setProgress} api={this.api} key='Sports' pagesize={9} category='Sports' />} />
            <Route exact path='/Health' element={<News setProgress={this.setProgress} api={this.api} key='Health' pagesize={9} category='Health' />} />
          </Routes>
        </HashRouter>
      </>
    )
  }
}


