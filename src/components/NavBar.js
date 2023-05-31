import { Link } from 'react-router-dom'

import React from 'react'


export default function NavBar () { 
    function activeHeading(name){
      for (const li of document.getElementsByClassName('nav-link')) {
        li.classList.remove("active");
      }
      document.getElementById(name).classList.add('active')
    }
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsBeat</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" id='home' onClick={()=>activeHeading('home')} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id='business' onClick={()=>activeHeading('business')} to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id='entertainment' onClick={()=>activeHeading('entertainment')} to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id='general' onClick={()=>activeHeading('general')} to="/">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id='health' onClick={()=>activeHeading('health')} to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id='science' onClick={()=>activeHeading('science')} to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id='technology' onClick={()=>activeHeading('technology')} to="/technology">Technology</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id='sports' onClick={()=>activeHeading('sports')} to="/sports">Sports</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }

