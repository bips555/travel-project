import React from 'react'
import Logo from './Logo.jpg'
import { Routes, Route, Link } from "react-router-dom";
import Contact from '../Pages/Contact';
import Destination from '../Pages/Destination';
import About from '../Pages/About';
import Tours from '../Pages/Tours';
import Home from './Home';
function Navbar() {
  return (
   <>
   <section className='s'>
   
   
   <nav className="navbar navbar-expand-lg  bg-light sticky-top">
  <div className="container-fluid d-flex justify-content-between">
  <div>
  <a class="navbar-brand" href="#">
  <Link to="/">
      <img  src={Logo}/>
      </Link>
  </a>
  </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav text-center text-xs-center gap-lg-5 mx-auto fw-bold">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tours">Tours</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/destination">Destination</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
   
  </div>
</nav>
<Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tours" element={<Tours/>} />
        <Route path="/destination" element={<Destination/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

  
 

</section>

   </>
  )
}

export default Navbar