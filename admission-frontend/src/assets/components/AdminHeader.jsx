import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function AdminHeader({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon1' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon1'/>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon1'/>
            <BsFillEnvelopeFill className='icon1'/>
            <BsPersonCircle className='icon1'/>
        </div>
    </header>
  )
}

export default AdminHeader