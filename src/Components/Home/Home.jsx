import React from 'react'
import './home.css'
import Logo from './avataaars.png'



export default function Home() {
  return <>
  
  <section id='home' className='vh-100 d-flex justify-content-center align-items-center text-center py-5'>
    <div className="layer-content ">
    <img src={Logo} className= 'w-75 home-svg py-4 mt-5' alt="" />
    <div className="text-home text-white">
  <h1>START REACT</h1>
  <div class="divider-custom py-2">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon px-3 fs-2"> <i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
  </div>
  <h4>Graphic Artist - Web Designer - Illustrator</h4>
  </div>
  </div>
  </section>
  </>
}
