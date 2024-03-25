import React from 'react'
import API_ENDPOINTS from '../../services/axiosEndpoints';
import api from '../../services/axiosInstances';
import { useEffect } from 'react';
import { useState } from 'react';
import '../../assets/css/counts.css'

function Counts() {
    const [userCounts, setUserCounts] = useState({
        totalUsers: 0,
        totalAdmins: 0,
        totalStudents: 0,
      });
    
      useEffect(() => {
        // Define the URL of your Spring Boot backend API
        const apiUrl = '/api/v1/user/counts'; // Adjust the URL as needed
    
        // api.get(API_ENDPOINTS.GET_COUNT)
        //   .then((response) => {
        //     setUserCounts(response.data);
        //   })
        //   .catch((error) => {
        //     console.error('Error fetching user counts:', error);
        //   });
          api.get(API_ENDPOINTS.GET_COUNT)
          .then((response) => {
            setUserCounts((prevCounts) => ({
              ...prevCounts,
              totalUsers: response.data.totalUsers,
              adminUsers: response.data.adminUsers,
              studentUsers: response.data.studentUsers,
            }));
          })
          .catch((error) => {
            console.error('Error fetching user counts:', error);
          });

          api.get(API_ENDPOINTS.GET_APPLICATIONCOUNT)
          .then((response) => {
            setUserCounts((prevCounts) => ({
              ...prevCounts,
              allApplications: response.data.totalApplications,
              rejectedApplications: response.data.rejectedApplications,
              paidApplications: response.data.paidApplications,
              approvedApplications: response.data.approvedApplications,
            }));
          })
          .catch((error) => {
            console.error('Error fetching application counts:', error);
          });


      }, []);
      
    
  return (
    <div className='counts'>
      <div className="div">
        <h1 className="total-users">{userCounts.totalUsers}</h1>
        <h6>Total Users</h6>
      </div>
      <div className="div">
        <h1 className="admin-users">{userCounts.adminUsers}</h1>
        <h6>Admin Users</h6>
      </div>
      <div className="div">
        <h1 className="student-users">{userCounts.studentUsers}</h1>
        <h6>Student Users</h6>
      </div>
      <div className="div">
        <h1 className="all-applications">{userCounts.allApplications}</h1>
        <h6>All Applications</h6>
      </div>
      <div className="div">
        <h1 className="rejected-applications">{userCounts.rejectedApplications}</h1>
        <h6>Rejected Applications</h6>
      </div>
      <div className="div">
        <h1 className="paid-applications">{userCounts.paidApplications}</h1>
        <h6>Paid Applications</h6>
      </div>
      <div className="div">
        <h1 className="approved-applications">{userCounts.approvedApplications}</h1>
        <h6>Approved Applications</h6>
      </div>
    </div>
  )
}

export default Counts
