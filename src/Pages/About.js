import React from 'react'
import aboutdata from '../Data/AboutData'
import CardData1 from '../Data/Carddata1'
import tourdata from '../Data/Tourdata'
function About() {
  return (
    <>
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-12'>
          <h1 className='fw-bold text-center py-5 '>About our Travel site</h1>
          {CardData1.map((c=>(
             <div className="card mb-3 py-5 shadow-lg p-3 mb-5 bg-body rounded border-light" style={{maxWidth: 1200}}>
             <div className="row g-0">
               <div className="col-md-4">
                 <img src={c.img} className="img-fluid w-50 d-flex align-items-center justify-content-center mx-5 rounded-start" alt="..." />
               </div>
               <div className="col-md-8">
                 <div className="card-body">
                   <h3 className="card-title">{c.heading}</h3>
                   <p className="card-text">
                    {c.title}
                   </p>
                   
                 </div>
               </div></div></div>
          )))}
         

    </div>
  </div>
</div>

     
   
    <div className='container py-5  backa'>
    <div className='row'>
     
       
    <h2 className='text-center py-5 '><u>Our Services</u></h2>
          {aboutdata.map((a)=>(<>
            
          <div className='col-lg-3 col-md-6 col-12 py-5'>   
        <div className="card border-light mx-auto" style={{width: '18rem'}}>
  <img src={a.img} className="card-img-top w-50 rounded mx-auto d-block" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-center fw-bolder">{a.heading}</h5>
    <p className="card-text text-center fs-10">{a.title}</p>
  </div>
</div>

</div>
</>   
          ))}
          </div>         
      </div>
      <>
      <div className='container py-5'>
        <div className='row'>
        <h2 className='text-center py-5 '><u>Upcoming Tours</u></h2>
          {tourdata.map((b)=>(
            
            <div className='col-lg-4 col-md-6 col-12'>
              <div className='outerbox d-flex align-items-center justify-content-center'>
              <img src={b.img} class="card-img-top rounded my-5" alt="..."/>
              
              <div className='innerbox shadow-lg bg-body rounded'>
                <h3 className='text-center fs-5 py-2 fw-bold'>
                {b.name}
                </h3>
                <p className='text-center fs-10 fw-bold'>{b.para}</p>
                <p className='text-center fs-10 fw-bold'>{b.mara}</p></div>
    
             
                </div>
              
           
            </div>
           
           
          ))}
        </div>
      </div>
   
      </>
    </>
  )
}


export default About