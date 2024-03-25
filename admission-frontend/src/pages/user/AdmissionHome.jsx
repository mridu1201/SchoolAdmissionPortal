import React from 'react'
import '../../assets/css/admissionhome.css'
import { Link } from 'react-router-dom'
import Navbar from '../../assets/components/NavBar'
export default function AdmissionHome() {
  return (
    <>
     <>
  <div className='headerAd'>
    <Navbar/>
    <div >
        <div className="logoo">

      </div>
    </div>
    <div id="intro-text">
        <br />
        <br />
        <br />
        <br />
        <br />
      <h1>
        <span id="first-part">In the hall of the Searching school</span> <br />
        <span id="second-part">Admission Box</span>
      </h1>
      <h3>
      We believe that every deserving student should have access to quality education. 
        <br />
        See how we can make your dreams a reality.
      </h3>
      <br />    
    <nav>
      <Link to='/application'><button >Click Here to Apply</button></Link>
    </nav>
    </div>
  </div>
  {/* <section id="about-us">
  <section class="about-item">
    <i class="fas fa-pencil-alt"></i>
    <h1>Consectetur Risus</h1>
    <p>
      Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
    </p>
  </section>
  <section class="about-item">
    <i class="fas fa-camera-retro"></i>
    <h1>Consectetur Risus</h1>
    <p>
      Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
    </p>
  </section>
  <section class="about-item">
    <i class="fas fa-dollar-sign"></i>
    <h2>Consectetur Risus</h2>
    <p>
      Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
    </p>
  </section>
</section> */}
  {/* <br /> */}
</>

    </>
  )
}