import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg p-4 fw-bolder fixed-top">
  <div className="container">
    <Link className="navbar-brand active text-white" aria-current="page" to="home">START REACT</Link>
    <button className="navbar-toggler text-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className='fw-bolder'>MENU</span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <Link className="nav-link text-white" to="portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link text-white" to="contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>  
  </>
}
