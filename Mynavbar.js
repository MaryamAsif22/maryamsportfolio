import React from 'react'
import { Link } from 'react-router-dom';
import bannerImage from './Image/jake-hills-c017EyPWVZg-unsplash.jpg'; 
export default function Nav() {
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MARYAM'S :)</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/Contact">Contact</Link></li>
                  <li><Link className="dropdown-item" to="/About">About</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/Project">Project page</Link></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="banner-container">
        <img className="banner-image" src={bannerImage} alt="Banner" />
        <h1 className="banner-text"> Welcome to Maryam's <br/> World</h1>
      </div>
    </>
  )
}
