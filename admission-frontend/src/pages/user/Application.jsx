import React from 'react'
import '../../assets/css/Register.css'
import { Link } from 'react-router-dom'
import { useStates } from '../../services/States'
import Navbar from '../../assets/components/NavBar'
function Register() {

  const {
    setName,
    setFathername,
    setMothername,
    setMobile,
    setGender,
    setOccupation,
    setAadhar,
    setEmis,
    setDob,
    setAddress,
    setParentemail,   
    ApplicationSubmit
  }=useStates();

  return (   
    <div>
        <Navbar/>
        <br/>
        <br/>
      <div className='body6'>
  <meta charSet="utf-8" />
  <title>Responsive Registration Form</title>
  <meta
    name="viewport"
    content="width=device-width,
initial-scale=1.0"
  />
  <link rel="stylesheet" href="style.css" />
  <div className="container6">
    <h1 className="form-title6">Registration</h1>
    <form action="#">
      <div className="main-user-info">
        <div className="user-input-box">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Full Name"
            onChange={(e)=>{setName(e.target.value)}}
          />
        </div>
        <div className="user-input-box">
          <label htmlFor="fathername">Father Name</label>
          <input
            type="text"
            name="fathername"
            placeholder="Enter Father Name"
            onChange={(e)=>{setFathername(e.target.value)}}
          />
        </div>
        <div className="user-input-box">
          <label htmlFor="mothername">Mother Name</label>
          <input
            type="text"
            name="mothername"
            placeholder="Enter Mother Name"
            onChange={(e)=>{setMothername(e.target.value)}}
          />
        </div>
        <div className="user-input-box">
          <label htmlFor="email">Parent's Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Parent's Email"
            onChange={(e)=>{setParentemail(e.target.value)}}
          />
        </div>
        <div className="user-input-box">
          <label htmlFor="mobile">Phone Number</label>
          <input
            type="text"
            name="mobile"
            placeholder="Enter Phone Number"
            onChange={(e)=>{setMobile(e.target.value)}}
          />
        </div>
        <div className="user-input-box">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            name="dob"
            placeholder="Enter Date of Birth"
            onChange={(e)=>{setDob(e.target.value)}}
          />
        </div>
        <div className="user-input-box">
          <label htmlFor="aadhar">Aadhar Number</label>
          <input
            type="text"
            name="aadhar"
            placeholder="Enter Aadhar Number"
            onChange={(e)=>{setAadhar(e.target.value)}}
          />
        </div>
        <div className="user-input-box">
          <label htmlFor="emis">EMIS Number</label>
          <input
            type="text"
            name="emis"
            placeholder="Enter EMIS Number"
            onChange={(e)=>{setEmis(e.target.value)}}
          />
        </div>
        <div className="user-input-box">
          <label htmlFor="occupation">Parent's Occupation</label>
          <input
            type="text"
            name="occupation"
            placeholder="Enter Occupation"
            onChange={(e)=>{setOccupation(e.target.value)}}
          />
        </div>
        <div className="user-input-box">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter Address"
            onChange={(e)=>{setAddress(e.target.value)}}
          />
        </div>

      </div>
      {/* <div className="gender-details-box">
        <span className="gender-title">Gender</span>
        <div className="gender-category">
          <input 
            type="radio" 
            name="gender"
            onChange={(e)=>{setGender(e.target.value)}}
          />
          <label htmlFor="male">Male</label>
          <input 
          type="radio" 
          name="gender"
          onChange={(e)=>{setGender(e.target.value)}}
          />
          <label htmlFor="female">Female</label>
          <input 
            type="radio" 
            name="gender"
            onChange={(e)=>{setGender(e.target.value)}}
          />
          <label htmlFor="other">Other</label>
        </div>
      </div> */}
      <div className="form-submit-btn">
        <input type="submit" onClick={ApplicationSubmit}/>
      </div>
    </form>
  </div>
</div>
</div>

  )
}

export default Register