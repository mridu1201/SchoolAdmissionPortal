import React from 'react'
import '../css/profile-card.css'

function ProfileCard1() {
  return (
    <div className='profile-card1'>
      <p className="p1-title">Application Status</p>
      <hr/>
      <div className="p1-btn1">
        <button className="status-btn">Track Admission Status</button>
      </div>
      <div className="p1-btn2">
        <button className="payment-btn">Make Payment</button>
      </div>
      <div className="p1-btn2">
        <button className="payment-btn">Add Documents</button>
      </div>
    </div>
  )
}

export default ProfileCard1
