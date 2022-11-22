import React from 'react'
import Tourdata1 from '../Data/Tourdata1'
import { Link } from 'react-router-dom'
function Tours() {
  return (
    <div className='py-5 backg'>
       <h2 className='container text-center  fw-bolder fs-1 py-5'>Best tours are awaiting for you..</h2>
      <div className='row d-flex mx-auto'>
        <div className='col-lg-1'></div>
     <div className='col-lg-2 col-md-12 col-sm-12 py-5'>
    <form className="d-flex" role="search">
  <input className="form-control me-5 border border-secondary" type="search" placeholder="Enter.." aria-label="Search" />
 
</form>
</div>
<div className='col-lg-2 col-md-6 col-sm-12 py-5  backg'>
<div className="btn-group">
  <button type="button" className="border border-secondary btn btn-light dropdown-toggle border-1" data-bs-toggle="dropdown" aria-expanded="false">
    Enter your destination
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">kathmandu</a></li>
    <li><a className="dropdown-item" href="#">bhaktapur</a></li>
    <li><a className="dropdown-item" href="#">lalitpur</a></li>
   
    <li><a className="dropdown-item" href="#">chitwan</a></li>
  </ul>
</div></div>
<div className='col-lg-2 col-md-6 col-sm-12 py-5  backg'>
  <button type="button" className="border border-secondary btn btn-light dropdown-toggle border-1" data-bs-toggle="dropdown" aria-expanded="false">
    Enter no. of people
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">1-3</a></li>
    <li><a className="dropdown-item" href="#">2-5</a></li>
    <li><a className="dropdown-item" href="#">3-10</a></li>
   
    <li><a className="dropdown-item" href="#">4-15</a></li>
  </ul>
</div>
<div className='col-lg-2 col-md-6 col-sm-12 py-5  backg'>
<div className="btn-group">

<div className="btn-group">
  <button type="button" className=" border border-secondary btn btn-light dropdown-toggle border-1" data-bs-toggle="dropdown" aria-expanded="false">
    Enter duration
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">1-3 days</a></li>
    <li><a className="dropdown-item" href="#">2-5 days</a></li>
    <li><a className="dropdown-item" href="#">3-10 days</a></li>
   
    <li><a className="dropdown-item" href="#">4-15 days</a></li>
  </ul>
</div></div>
</div>
<div className='col-lg-2 col-md-6 col-sm-12 py-5'>
<form class="d-flex" role="search">
        
        <button class="btn btn-outline-success" type="submit">Book it now</button>
      </form>


      </div>
      
      </div>
      <h3 className='Some available tours...'></h3>
      <div className='container'>
        <div className='row'>
          {Tourdata1.map((e)=>(
            <div className='col-lg-6 col-md-12 col-12'>
            <div className="card m-3 width border-0  shadow-lg bg-body rounded">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={e.img} className=" w-100 h-100 img-fluid rounded-start " alt="..."/>
          </div>
          <div className="col-md-6">
            <div className="card-body text-center">
              <h4 className="card-title">{e.title}</h4>
              <p className="card-text">{e.destinations}</p>
              <p className="card-text">{e.age}</p>
              <p className="card-text">{e.mountain}</p>
              <p className="card-text">{e.travel}</p>
              <p className="card-text">{e.operator}</p>
              <Link className='d-flex justify-content-center align-items-center text-decoration-none' to='/contact'><button type="button" class="btn btn-light">BOOK NOW</button></Link>
            </div>
          </div></div></div>
      
          </div>
          ))}
    </div>
  </div>
  </div>    
  )
}

export default Tours