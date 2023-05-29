import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar></NavBar>
          <Routes>
            <Route exact path='/' element={<News key='general' country='us' category="general"></News>}></Route>
            <Route exact path='/business' element={<News key="business" country='us' category="business"></News>}></Route>
            <Route exact path='/entertainment' element={<News key="entertainment" country='us' category="entertainment"></News>}></Route>
            <Route exact path='/technology' element={<News key="technology" country='us' category="technology"></News>}></Route>
            <Route exact path='/health' element={<News key="health" country='us' category="health"></News>}></Route>
            <Route exact path='/science' element={<News key="science" country='us' category="science"></News>}></Route>
            <Route exact path='/sports' element={<News key="sports" country='us' category="sports"></News>}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}
