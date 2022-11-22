import React from 'react'
import homedata from '../Data/Homedata'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Destinationdata from '../Data/Destinationdata';
import { Link } from 'react-router-dom';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss';
import 'swiper/scss/scrollbar';
function Home() {
  return (
   <div className='container py-5'>
    <h1 className='py-5 text-center fw-bolder'>WELCOME TO TRAVEL</h1>
    <div className='row py-5'>
   <div id="carouselExampleCaptions" className="carousel slide shadow-lg bg-body rounded py-2" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner fw-bolder">
    <div className="carousel-item active">
      <img src="https://www.holidify.com/images/bgImages/KATHMANDU.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 className='fw-bolder'>Kathmandu</h5>
        <p>Sprawled over its namesake valley surrounded by Himalayan mountains, Kathmandu is Nepal’s capital and most-visited destination, full of ancient temples, golden pagodas, natural beauty and fascinating villages. At an elevation of 4,344 feet, Kathmandu marks the confluence of the Bagmati and Vishnumat..</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.holidify.com/images/bgImages/POKHARA.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Pokhara</h5>
        <p>Pokhara, the 'Tourist Capital of Nepal,' is the second-largest city in this Himalayan country, after Kathmandu. At an altitude of more than 900m, it is one of the highest cities, making it the base for many world-famous treks. The highlight of the town is its Lakeside, which is a boating paradise fl...</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.holidify.com/images/bgImages/NAGARKOT.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Lumbini</h5>
        <p>Nestled in the Himalayas near the Indian border, the beautiful town of Lumbini is the birthplace of Lord Buddha. Lumbini is a UNESCO World Heritage Site and has a plethora of ancient stupas dating back to 2000 years and monasteries that were built by past dynasties. People come here from all ov...</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


    </div>
    <div className='py-5'>
<div className='row'>
<h2 className='text-center fw-bolder py-5 fs-3'>SERVICES</h2>
    {homedata.map((f)=>(
     
      <div className='col-lg-3 col-md-6 col-12 '>
    <div className="card text-center mx-auto my-3" style={{width: '14rem',height:'250px'}}>
  <div className="card-body">
  <h4 className="card-title fs-1 text-danger">{f.icon}</h4>
    <h4 className="card-title">{f.title}</h4>
    <p className="card-text">{f.text}</p>
  </div>
  </div>

</div>
    ))}
    
    </div>
   </div>
   <div className='row'>
    <h2 className='text-center fw-bolder py-5 fs-3'>Some famous slides of destinations................</h2>
   <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{    
        400: {
          width: 400,
          slidesPerView: 1,
        },
        640: {
          width: 640,
          slidesPerView: 2,
        },
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
      
    >
       {Destinationdata.map((d) => (
      <SwiperSlide>
            <div className="card border-0 relati align-items-center justify-content-center  rounded-start my-5">
              <img src={d.img} className="card-img-top shadow-lg bg-body rounded m-3 " alt="..." />
              <div class="posi">
                <h4 className="text-center fw-bold">{d.title}</h4>
               <Link className='readmore d-flex justify-content-center align-items-center text-decoration-none' to='/tours'>{d.button}</Link>
              </div>
            </div>       
      </SwiperSlide>
       ))}
     
    </Swiper>
   </div>
   </div>
  )
}

export default Home