import React from 'react'
import './portfolio.css'
import image1 from './images/cabin1.jpg'
import image2 from './images/cake2.png'
import image3 from './images/circus3.jpg'
import image4 from './images/game4.jpg'
import image5 from './images/safe5.jpg'
import image6 from './images/submarine6.jpg'


export default function Portfolio() {
return <>
    <section className='py-5' id='portfolio'>
        <div className="container">
        <h1 className='mt-5 text-center fw-bolder'>PORTFOLIO</h1>
        <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon px-3 fs-2"> <i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
        </div>
            <div className="row g-5 p-5" >
            <div className="col-md-4 my-3">
            <img src={image1} className='w-100 rounded-3' alt="React Image" />
            </div>
            <div className="col-md-4 my-3">
            <img src={image2} className='w-100 rounded-3' alt="React Image" />
            </div>
            <div className="col-md-4 my-3">
            <img src={image3} className='w-100 rounded-3 ' alt="React Image" />
            </div>
            <div className="col-md-4 my-3">
            <img src={image4} className='w-100 rounded-3 ' alt="React Image" />
            </div>
            <div className="col-md-4 my-3">
            <img src={image5} className='w-100 rounded-3' alt="React Image" />
            </div>
            <div className="col-md-4 my-3">
            <img src={image6} className='w-100 rounded-3' alt="React Image" />
            </div>
            </div>
        </div>
        </section>
  </>
}
