import React from 'react'
import './about.css'

export default function About() {
  return <>
    <section id='about' className='py-4'>
    <div className="container py-5">
      <h1 className='mt-5 text-center fw-bolder '>ABOUT</h1>
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon px-3 fs-2"> <i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <div className="row m-auto d-flex justify-content-center my-5">
        <div className="col-md-4 ">
          <p className='fs-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-4">
          <p className='fs-5'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
        </div>
      </div>
    </div>
    </section>
  </>
}
