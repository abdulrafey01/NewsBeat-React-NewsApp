import React, { useState } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default function App () {

 const apiKey = process.env.REACT_APP_NEWS_APIKEY

    const [progress, setprogress] = useState(30)
 
  

 const setProgress = (val)=>{
    setprogress(val)
  }
    return (
      <Router>
        <div>
          <NavBar className='navBar'></NavBar>
          <LoadingBar className='loadingBar'
          height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key='general' country='us' category="general"></News>}></Route>
            <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" country='us' category="business"></News>}></Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" country='us' category="entertainment"></News>}></Route>
            <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" country='us' category="technology"></News>}></Route>
            <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" country='us' category="health"></News>}></Route>
            <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" country='us' category="science"></News>}></Route>
            <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" country='us' category="sports"></News>}></Route>
          </Routes>
        </div>
      </Router>
    )
  }

