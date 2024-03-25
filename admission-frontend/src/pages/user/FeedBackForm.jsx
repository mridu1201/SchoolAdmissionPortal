import React, { useState } from 'react';
import '../../assets/css/profileupdate.css';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_ENDPOINTS from '../../services/axiosEndpoints';
import toast from 'react-hot-toast';
import { micro } from '../../services/axiosInstances';

function FeedbackForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8081'+API_ENDPOINTS.SUBMIT_FEEDBACK, formData);
      toast.success('Feedback submitted successfully!');
      navigate('/profile');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };
  

  return (
    <div className="body7">
      <div className="wrapper">
        <Link to="/profile">
          <p>
            <ArrowCircleLeftOutlinedIcon /> back
          </p>
        </Link>

        <div className="heading">
          <h2>Submit your Feedback</h2>
          <p>Give your comments below</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              className="input-field1"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              name="email"
              className="input-field1"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              name="comment"
              className="input-field1"
              placeholder="Comment"
              value={formData.comment}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <button type="submit" className="update-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
