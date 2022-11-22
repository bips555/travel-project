import React from "react";
import Destinationdata from "../Data/Destinationdata";
import { Link } from "react-router-dom";

function Destination() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center py-5 ">Some Famous Destinations</h1>
      <div className="row">
        {Destinationdata.map((d) => (
          <div className="col-lg-4">
            <div className="card border-0 relati align-items-center justify-content-center  rounded-start">
              <img src={d.img} className="card-img-top shadow-lg bg-body rounded m-3" alt="..." />
              <div class="posi">
                <h4 className="text-center fw-bold">{d.title}</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Excepturi saepe vel ea.Lorem ipsum dolor
                </p>
               <Link className='readmore d-flex justify-content-center align-items-center text-decoration-none' to='/tours'>{d.button}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;
