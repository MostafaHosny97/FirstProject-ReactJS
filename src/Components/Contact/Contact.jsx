import React from 'react'
import './contact.css'

export default function Contact() {
  return <>
  <section id='contact' className='py-5 my-5'>
    <div className="container">
      <h1 className='text-center fw-bolder'>CONTACT ME</h1>
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon px-3 fs-2"> <i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <div className="form-cus w-75 m-auto ">
        <input class="form-control py-2 fs-3" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please Enter Your Name." aria-invalid="false"/>
        <br />
      <input className='form-control py-2 fs-3' type="text" placeholder='Email Address' required/>
      <br />
      <input className='form-control py-2 fs-3' type="text" placeholder='Phone Number' required/>
      <br />
      <textarea className='form-control fs-3 ' name="" placeholder='Message' id="" cols="0" rows="3" required="required"></textarea>
      <button class="btn btn-success fw-bolder my-2 " type="submit" id="sendMessageButton">Send</button>
      </div>
      </div>
    </section>
  </>
}
