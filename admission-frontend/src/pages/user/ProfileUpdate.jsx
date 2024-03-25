import React, { useState, useEffect } from 'react';
import '../../assets/css/profileupdate.css';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_ENDPOINTS from '../../services/axiosEndpoints';
import api from '../../services/axiosInstances';
import toast from 'react-hot-toast';

function ProfileUpdate() {
  const navigate=useNavigate();
  // const [formData, setFormData] = useState({
  //   firstname: '',
  //   lastname: '',
  //   age: '',
  //   email: '',
  //   password: '',
  // });
  // const uid = localStorage.getItem('userId');
  // const token=localStorage.getItem('token');
  // useEffect(() => {
  //   // Fetch the existing user profile data and update the form data
  //   api
  //     .get(API_ENDPOINTS.PROFILE + `/${uid}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`, // Include the token in the request headers
  //       },
  //     })
  //     .then((response) => {
  //       const userProfileData = response.data;
  //       setFormData({
  //         firstname: userProfileData.firstname || '',
  //         lastname: userProfileData.lastname || '',
  //         age: userProfileData.age || '',
  //         email: userProfileData.email || '',
  //       });
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching user profile', error);
  //     });
  // }, [token,uid]);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleUpdate = () => {
  //   // Make a PUT request to update the profile with the formData
  //   api
  //     .put(API_ENDPOINTS.EDIT_PROFILE + `${uid}`, formData)
  //     .then((response) => {
  //       console.log('Profile updated successfully', response.data);
  //       navigate("/profile")
  //       // You can handle the success or navigate to a different page here
  //     })
  //     .catch((error) => {
  //       console.error('Error updating profile', error);
  //       // Handle errors here
  //     });
  // };

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
  });

  const uid = localStorage.getItem('userId'); 

  const { firstname, lastname, email, age } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(API_ENDPOINTS.EDIT_PROFILE + `/${uid}`, user, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((response) => {
      toast.success("Profile Updated✌️");
      navigate("/profile");
    })
    .catch((error) => {
      toast.error("Update unsuccessful😞")
      console.error("Error updating user profile", error);
      console.log("Server Response Data:", error.response.data);
    });
    
  };

  const loadUser = async () => {
    const result = await api.get(API_ENDPOINTS.PROFILE + `/${uid}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, 
      },
    });
    setUser(result.data);
  }


  return (
    <div className="body7">
      <div className="wrapper">
        <Link to="/profile">
          <p>
            <ArrowCircleLeftOutlinedIcon /> back
          </p>
        </Link>

        <div className="heading">
          <h2>Update your profile</h2>
          <p>Make changes to the below details</p>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e)=>{onInputChange(e)}}
            className="input-field1"
            placeholder="First Name"
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e)=>{onInputChange(e)}}
            className="input-field1"
            placeholder="Last Name"
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            name="age"
            value={age}
            onChange={(e)=>{onInputChange(e)}}
            className="input-field1"
            placeholder="Age"
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e)=>{onInputChange(e)}}
            className="input-field1"
            placeholder="Email"
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            className="input-field1"
            placeholder="Enter Your Password To Update"
          />
        </div>

        <div className="input-group">
          <button className="update-btn" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdate;
