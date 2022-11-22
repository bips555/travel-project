import React from 'react'
function Header() {
  return (
    <>  
   <header className='bg-dark text-light d-none d-lg-block'>
    <div className='container-fluid'>
      <div className='row align-items-center'>
        <div className='col-lg-7 col-md-12 text-lg-end '>
          <div className='text-lg-start pt-3'>
      <p>    Find the best tours, places, destiantions and plan accordingly.........</p>
          </div>
          </div>
          <div className='col-lg-5'>
          <ul className='list-unstyled d-flex gap-3 justify-content-end m-0'>
          
            <li className='pt-2'> <i class="bi bi-person-fill mx-1"></i>
             Sign in</li>
           <li>  <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    english
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">english</a></li>
    <li><a className="dropdown-item" href="#">french</a></li>
    <li><a className="dropdown-item" href="#">german</a></li>
   
  </ul>
</div>

        
         </li>  
            <li> <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    USD
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">USE</a></li>
    <li><a className="dropdown-item" href="#">euro</a></li>
    <li><a className="dropdown-item" href="#">yen</a></li>
  </ul>
</div>

          </li>
            <li className='pt-2'>
            <i class="bi bi-cart-check mx-1"></i>
            $0.00
            </li>
          </ul>
        </div>
      </div>
      </div>
     
    
   </header>
   
  </>
    
  )
 

}


export default Header