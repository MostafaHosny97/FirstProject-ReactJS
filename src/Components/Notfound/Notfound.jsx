import React from 'react'
import { Link } from 'react-router-dom'
import './notfound.css'



export default function Notfound() {
  return <>
  <section id='notFound'>
  <div className=' vh-100 bg-black fw-bolder text-center py-5 text-white'>
  <h1 className='py-5'>Sorry, this page isn't available.</h1>
  <h5 className='pb-5'>The link you followed may be broken, or the page may have been removed. Go back to START-REACT.</h5>
  <Link to="home"><button className='btn btn-success fw-bolder my-5'>Home</button></Link>
  </div>
  </section>
  </>
}
