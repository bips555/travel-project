import React from 'react'

function Footer() {
  return (
    <>
    <footer className='bg-dark text-white p-3'>
      <div className='container border-bottom'>
        <div className='row hover'>
          <div className='col-lg-3 col-6 col-sm-6 lh-lg'>
            <h3 className='py-3'>
              About
            </h3>
            <ul className='list-unstyled '>
          
              <li>Company</li>
              <li>Careers</li>
              <li>Help Center</li>
              <li>Privacy</li>
              <li>Terms & Conditions</li>
              
            </ul>
          </div>
          <div className='col-lg-3 col-6 col-sm-6 lh-lg'>
            <h3 className='py-3'>
              Services
            </h3>
            <ul className='list-unstyled'>
              <li>Hotel Booking</li>
              <li>Car Rental</li>
              <li>Bus Ticket</li>
              <li>Flight Booking</li>
              <li>Restaurant</li>
            </ul>
          </div>
          <div className='col-lg-3 col-6 col-sm-6'>
            <h3 className='py-3'>
              Quick Links
            </h3 >
            <ul className='list-unstyled lh-lg'>
              <li>Franch Experience</li>
              <li>Ancient Rome Discover</li>
              <li>Get Into Naxos Island</li>
              <li>Vietnam Island Experience</li>
                <li>Restaurant</li>
            </ul>
          </div>
          <div className='col-lg-3 col-6 col-sm-6'>
            <h3 className='py-3'>
              Pay Safely With US
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quaerat nam, similique assumenda quam dolor ratione voluptatibus iure dicta pariatur.
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row pt-3'>
          <div className="col-lg-8 fs-3 mx-auto d-flex gap-4 ">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-wechat"></i>
          <i class="bi bi-snapchat"></i>
  </div>
  <div className='col-lg-4 '>
  Copyright. All Rights Reserved By biplove subedi</div>   
       </div>
      </div>
      </footer>
    </>
  )

}

export default Footer
