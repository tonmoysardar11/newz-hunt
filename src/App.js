
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const api = process.env.REACT_APP_NEWZ_API;
  
  const [progress, setProgress] = useState(0);
 
    return (
      <>
        <HashRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            width='1vh'
            progress={progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} api={api} key='Sports' pagesize={9} category='General' />} />
            <Route exact path='/Business' element={<News setProgress={setProgress} api={api} key='Business' pagesize={9} category='Business' />} />
            <Route exact path='/Entertainment' element={<News setProgress={setProgress} api={api} key='Entertainment' pagesize={9} category='Entertainment' />} />
            <Route exact path='/Technology' element={<News setProgress={setProgress} api={api} key='Technology' pagesize={9} category='Technology' />} />
            <Route exact path='/Sports' element={<News setProgress={setProgress} api={api} key='Sports' pagesize={9} category='Sports' />} />
            <Route exact path='/Health' element={<News setProgress={setProgress} api={api} key='Health' pagesize={9} category='Health' />} />
          </Routes>
        </HashRouter>
      </>
    )
  }
  export default App;


