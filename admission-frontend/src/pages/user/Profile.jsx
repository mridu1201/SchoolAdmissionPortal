// import { useEffect, useState } from 'react';
// import api from '../../services/axiosInstances';
// import API_ENDPOINTS from '../../services/axiosEndpoints';
// import '../../assets/css/profile-page.css'
// import Navbar from '../../assets/components/NavBar';
// import ProfileCard1 from '../../assets/components/ProfileCard1';
// import ProfileCard2 from '../../assets/components/ProfileCard2';
// import ModeEditIcon from '@mui/icons-material/ModeEdit';
// import UserUpdateModal from '../../assets/components/UserUpdateModal';
// import { Link } from 'react-router-dom';

// const Profile = () => {
//   const [userProfile, setUserProfile] = useState(null);
//   const token = localStorage.getItem('token');
//   const uid = localStorage.getItem('userId');

//   const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   useEffect(() => {
//     if (token && uid) {

//       api
//         .get(API_ENDPOINTS.PROFILE + `/${uid}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((res) => {

//           const userProfileData = res.data;
//           setUserProfile(userProfileData);
//         })
//         .catch((error) => {
//           // Handle errors when fetching the user's profile
//           console.error('Error fetching user profile:', error);
//         });
//     }
//   }, [token, uid]);

//   return (
    
//     <div className='profile-maindiv'>
      
//       <div className="profile-nav">
//         <Navbar/>
//       </div>
      
//       <div className='profile-bg'>
//         <img src="https://images4.alphacoders.com/618/618580.jpg" alt="" className='profile-bg-img' />
//       </div>
//       <div className='profile-bg profile-picture'>
//         <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="profile-img" />
//       </div>
//       {userProfile ? (
//       <div className='profile-bg profile-details'>
//         <p className='profile-name'>{userProfile.firstname} {userProfile.lastname}</p>
//         <p className='profile-age'><strong>Age: </strong>{userProfile.age}</p>
//         <p className='profile-email'>{userProfile.email}</p>
//         <Link to='/editprofile'><div><ModeEditIcon className='profile-edit'/></div></Link>
//         {/* <UserUpdateModal isOpen={isModalOpen} onClose={closeModal} /> */}
//       </div>
//       ) : (
//         <p>Loading user profile...</p>
//       )}
//       <div className='profile-bg profile-complete'>
//         <div className="profile-others">
//           <div className="application-status"><ProfileCard1/></div>
//           <div className="payment-details"><ProfileCard2/></div>
//         </div>
//       </div>
//       {/* {userProfile ? (
//         <div>
//           <h2>User Profile</h2>
//           <p>First Name: {userProfile.firstname}</p>
//           <p>Last Name: {userProfile.lastname}</p>
//           <p>Email: {userProfile.email}</p>
//           <p>Age: {userProfile.age}</p>
//         </div>
//       ) : (
//         <p>Loading user profile...</p>
//       )} */}

//     </div>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from 'react';
import '../../assets/css/profile-page.css';
import api from '../../services/axiosInstances';
import API_ENDPOINTS from '../../services/axiosEndpoints';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const token = localStorage.getItem('token');
  const uid = localStorage.getItem('userId');
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (token && uid) {
      api
        .get(API_ENDPOINTS.PROFILE + `/${uid}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const userProfileData = res.data;
          setUserProfile(userProfileData);
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
        });
    }
  }, [token, uid]);

  return (
    <div className='body8'>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Profile Page</title>
        <link rel="stylesheet" href="style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        />
        <div className="navbar-top">
          <div className="titlee">
            <h1>Profile</h1>
          </div>
          <ul>
            <li>
              <a href="#message">
                <span className="icon-count">29</span>
                <i className="fa fa-envelope fa-2x" />
              </a>
            </li>
            <li>
              <a href="#notification">
                <span className="icon-count">59</span>
                <i className="fa fa-bell fa-2x" />
              </a>
            </li>
            <li>
              <a href="#sign-out">
                <i className="fa fa-sign-out-alt fa-2x" />
              </a>
            </li>
          </ul>
        </div>
        <div className="sidenav">
          <div className="profile">
            {userProfile && (
              <>
              
                <div className="name">Welcome,</div>
                <img
                  src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
                  alt=""
                  width={170}
                  height={170}
                  style={{ borderRadius: '50%',
                  marginLeft:'35px'
                }} 
                />
                <div className="name">{userProfile.firstname}</div>
                <div className="job">{userProfile.role}</div>
              </>
            )}
          </div>
          <div className="sidenav-url">
            <div className="url">
              <a href="#profile" className="active">
                Profile
              </a>
              <hr align="center" />
            </div>
            <div className="url">
              <a href="#settings">Application Status</a>
              <hr align="center" />
            </div>
            <div className="url">
              <a href="#settings">Apply and Pay</a>
              <hr align="center" />
            </div>
          </div>
        </div>
        <div className="main">
          <div className="card9">
            <Link to='/profileupdate'><EditIcon
            style={
              {
                marginLeft:'500px',
                color:'gray',
                fontSize:'35px'
              }
            }
            />
            </Link>
            <div className="card-body9">
              <i className="fa fa-pen fa-xs edit" />
              <table>
                <tbody>
                  <tr>
                    <td>First Name</td>
                    <td>:</td>
                    {userProfile && <td>{userProfile.firstname}</td>}
                  </tr>
                  <tr>
                    <td>Last Name</td>
                    <td>:</td>
                    {userProfile && <td>{userProfile.lastname}</td>}
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>:</td>
                    {userProfile && <td>{userProfile.email}</td>}
                  </tr>
                  <tr>
                    <td>Age</td>
                    <td>:</td>
                    {userProfile && <td>{userProfile.age}</td>}
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
          <h2>SOCIAL MEDIA</h2>
    <div className="card9">
      <div className="card-body9">
        <i className="fa fa-pen fa-xs edit" />
        <div className="social-media">
          <span className="fa-stack fa-sm">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-facebook fa-stack-1x fa-inverse" />
          </span>
          <span className="fa-stack fa-sm">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-twitter fa-stack-1x fa-inverse" />
          </span>
          <span className="fa-stack fa-sm">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-instagram fa-stack-1x fa-inverse" />
          </span>
          <span className="fa-stack fa-sm">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-invision fa-stack-1x fa-inverse" />
          </span>
          <span className="fa-stack fa-sm">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-github fa-stack-1x fa-inverse" />
          </span>
          <span className="fa-stack fa-sm">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-whatsapp fa-stack-1x fa-inverse" />
          </span>
          <span className="fa-stack fa-sm">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-snapchat fa-stack-1x fa-inverse" />
          </span>
        </div>
      </div>
    </div>
        </div>
      </>
    </div>
  );
}

export default Profile;
