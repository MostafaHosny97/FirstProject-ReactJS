import React from 'react'
import './footer.css';



export default function Footer() {
  return <>
  
  <section id='footer' className='bg-dark text-white'>
  <div className="container">
    <div className="row">
      <div className="col-md-4 my-5 m-auto text-center">
        <h3>LOCATION</h3>
        <span>2215 John Daniel Drive</span>
        <br/>
        <span>Clark, MO 65243</span>
      </div>
      <div className="col-md-4 my-5 text-center">
        <h3>AROUND THE WEB</h3>
        <div className="icons d-flex justify-content-center align-items-center ">
        <div className="icon-layout">
          <i class="fa-brands fa-facebook-f"></i>
        </div>
        <div className="icon-layout">
          <i class="fab fa-fw fa-twitter"></i>
        </div>
        <div className="icon-layout">
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
        <div className="icon-layout">
          <i class="fab fa-fw fa-dribbble"></i>
        </div>
        </div>
      </div>
      <div className="col-md-4 my-5 text-center">
        <h3>ABOUT FREELANCER</h3>
        <span>Freelance is a free to use, MIT licensed<br/> Bootstrap theme created by Route</span>
      </div>
    </div>
  </div>
  <div className="copy-right">
      <span>Copyright © Your Website 2021</span>
    </div>
  </section>


  </>
}
