import React, { useState, useEffect, Fragment } from 'react';
import { FaBars, FaUser } from 'react-icons/fa';
import {
  Nav,
  NavContainer,
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
  Bars,
} from './NavbarStyles.jsx';
import '../css/Navbar.css';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-scroll'

const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  const handleLogout = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    
    nav('/');
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  const handleMobileClick = () => {
    setIsMobile(!isMobile);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);

  const nav=useNavigate();

  const gotohome=()=>{
    nav("/home");
  }
  const gotoTestimonials=()=>{
    nav("/home/testimonial");
  }
  const gotoadmission=()=>{
    nav("/home/admission");
  }
  const gotofaq=()=>{
    nav("/home/faq");
  }
  const gotoabout=()=>{
    nav("/home/about");
  }
  const gotocontact=()=>{
    nav("/home/about");
  }
  const gotoProfile=()=>{
    nav('/profile');
  }
  
//   const Logout = () => {
//   useState(() => {
 

//     localStorage.removeItem('token');
//     localStorage.removeItem('userId');
    

//     nav('/login');
//   }, []);


// };

  return (
    <Fragment> 
      <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <NavContainer>
          <NavLogo>
            <img src='https://res.cloudinary.com/dqpyrzzw7/image/upload/v1695536806/logo-removebg-preview_r4gcjf.png' width={250} className='nav-logo'/>
          </NavLogo>
          <MobileIcon onClick={handleMobileClick}>
            <FaBars />
          </MobileIcon>
          <NavMenu className={isMobile ? 'mobile-menu' : ''}>
            <NavItem>
              <Link activeClass="active" smooth spy to='banner1' ><NavLinks onClick={gotohome}>Home</NavLinks></Link>
            </NavItem>
            <NavItem>
            <Link activeClass="active" smooth spy to='admissions'>
              <NavLinks >Admission</NavLinks>
            </Link>
            </NavItem>
            <NavItem>
            <Link activeClass="active" smooth spy to='testimonials'>
              <NavLinks >Testimonials</NavLinks>
            </Link>
            </NavItem>
            <NavItem>
            <Link activeClass="active" smooth spy to='faq'>
              <NavLinks >FAQ</NavLinks>
            </Link>
            </NavItem>
            <NavItem>
            <Link activeClass="active" smooth spy to='about'>
              <NavLinks >About</NavLinks>
            </Link>
            </NavItem>
            <NavItem>
            <Link activeClass="active" smooth spy to='contact'>
              <NavLinks >Contact Us</NavLinks>
            </Link>
            </NavItem>
            <NavItem>
            <Link activeClass="active" smooth spy to='contact'>
              <NavLinks onClick={gotoProfile}>Profile</NavLinks>
            </Link>
            </NavItem>
            <NavItem>
            <Link activeClass="active" smooth spy to='login' onClick={handleLogout}>
              <NavLinks>Logout</NavLinks>
            </Link>
            </NavItem>
          {/* <NavItem>
            <Link activeClass="active" smooth spy to='contact'>
              <NavLinks onClick={gotoProfile}>
                <FaUser /> 
            </NavLinks>
            </Link>
          </NavItem> */}
          </NavMenu>
        </NavContainer>
      </Nav> 
    </Fragment>
  );
};

export default Navbar;
