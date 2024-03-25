import React from 'react'
import '../css/profile-card.css'
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';

function ProfileCard2() {
  const isAppSubmitted= false
  const isPaySubmitted= true
  const isDocSubmitted= true
  return (
    <div className='p2-card'>
      <p className="p2-title">Application Submission Status</p>
      <hr/>
      <div className="app-status">
        <p className="p2-appq">Application</p>
      {isAppSubmitted ? (
        <p className='p2-submit'><CheckCircleTwoToneIcon className='tick'/>Submitted</p>
      ) : (
        <p className='p2-notsub'><ErrorTwoToneIcon className='err'/>No Submission</p>
      )}
      </div>
      <div className="doc-status">
      <p className="p2-appq">Documents</p>
      {isDocSubmitted ? (
        <p className='p2-submit'><CheckCircleTwoToneIcon className='tick'/>Submitted</p>
      ) : (
        <p className='p2-notsub'><ErrorTwoToneIcon className='err'/>No Submission</p>
      )}
      </div>
      <div className="pay-status">
      <p className="p2-appq">Payment</p>
      {isPaySubmitted ? (
        <p className='p2-submit'><CheckCircleTwoToneIcon className='tick'/>Done</p>
      ) : (
        <p className='p2-notsub'><ErrorTwoToneIcon className='err'/>Not Done</p>
      )}
      </div>
    </div>
  )
}

export default ProfileCard2
