import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import api from '../../services/axiosInstances';
import API_ENDPOINTS from '../../services/axiosEndpoints';
import toast from 'react-hot-toast';

function UpdateApplication() {
  const [application, setApplication] = useState({
    name: '',
    fathername: '',
    mothername: '',
    mobile: '',
    dob: '',
    aadhar: '',
    emis: '',
    occupation: '',
    address: '',
    parentemail: '',
    gender: '',
  });

  const navigate=useNavigate();

  const { aid } = useParams();

  useEffect(() => {
    const fetchApplicationData = async () => {
      try {
        const response = await api.get(API_ENDPOINTS.VIEW_APPLICATION + `${aid}`);
        setApplication(response.data);
      } catch (error) {
        console.error('Error fetching application data:', error);
      }
    };

    fetchApplicationData();
  }, [aid]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = name === 'dob' ? new Date(value).toISOString().split('T')[0] : value;
  
    setApplication({
      ...application,
      [name]: formattedValue,
    });
  };

  const handleUpdate = async () => {
    try {
      await api.put(API_ENDPOINTS.EDIT_APPLICATION + `/${aid}`, application);
      console.log('Profile updated successfully!');
      toast.success("Application Updated Successfully🤩")
      navigate("/admin/application")
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error("Application not updated😞")
    }
  };

  return (
    <div className="body7">
      <div className="wrapper">
        <Link to="/admin/application">
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
            name="name"
            className="input-field1"
            placeholder="Full Name"
            value={application.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="fathername"
            className="input-field1"
            placeholder="Father Name"
            value={application.fathername}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="mothername"
            className="input-field1"
            placeholder="Mother Name"
            value={application.mothername}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="mobile"
            className="input-field1"
            placeholder="Phone Number"
            value={application.mobile}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <input
            type="date"
            name="dob"
            className="input-field1"
            placeholder="Date of Birth"
            value={application.dob}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="aadhar"
            className="input-field1"
            placeholder="Aadhar"
            value={application.aadhar}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="occupation"
            className="input-field1"
            placeholder="Parent's Occupation"
            value={application.occupation}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="parentemail"
            className="input-field1"
            placeholder="Parent's Email"
            value={application.parentemail}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="gender"
            className="input-field1"
            placeholder="Gender"
            value={application.gender}
            onChange={handleInputChange}
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

export default UpdateApplication;
