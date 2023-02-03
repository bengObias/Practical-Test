import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="bg--light">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link to="/" className="navbar-brand">Temokin <i className="bi bi-buildings"></i></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
              
          <div className="collapse navbar-collapse ps-5" id="navbarNav">
            <ul className="navbar-customized align-items-center justify-content-around gap-5">
              <li className="nav-item"> <Link to = "/" className="nav-link active" aria-current="page">Home</Link> </li>
              <li className="nav-item dropdown-center dropdown-toggle" data-bs-toggle="dropdown"> <Link to = "/about" className="nav-link">About Temokin</Link> 
                <ul class="dropdown-menu">
                  <li><Link to="" className="dropdown-item text-wrap">ABOUT US</Link></li>
                  <li><Link to="" className="dropdown-item text-wrap">TEAM LEADERS</Link></li>
                  <li><Link to="" className="dropdown-item text-wrap">AWARDS & ACHIEVEMENTS</Link></li>
                  <li><Link to="" className="dropdown-item text-wrap">LICENSES & REGISTRATIONS</Link></li>
                </ul>
              </li>

              <li className="nav-item"> <Link to = "/civil" className="nav-link">Civil Engineering</Link> </li>
              <li className="nav-item"> <Link to = "/property" className="nav-link">Property Development</Link> </li>
              <li className="nav-item"> <Link to = "/contact" className="nav-link">Contact Us</Link> </li>
            </ul>
          </div>
            
        </div>
    </nav>    
  </div>
  )
}

export default Navbar;
