import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import API_ENDPOINTS from '../../services/axiosEndpoints';
import api from '../../services/axiosInstances';
import '../../assets/css/viewapplication.css';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { Edit } from '@mui/icons-material';

const ViewApplication = () => {
  const [application, setApplication] = useState({
    aid: '',
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
    admissionStatus: '',
    paymentStatus: '',
    interviewSchedule: '',
    interviewDate: '',
    interviewTime:'',
  });

  const { aid } = useParams();

  useEffect(() => {
    loadApplication();
  }, [aid]);

  const loadApplication = async () => {
    try {
      const result = await api.get(API_ENDPOINTS.VIEW_APPLICATION + `${aid}`);
      console.log('Response Data:', result.data);
      setApplication(result.data);
    } catch (error) {
      console.error('Error loading application:', error);
    }
  };

  const handleAccept = async () => {
    try {
      await api.post(API_ENDPOINTS.ACCEPT_APPLICATION + `${aid}`);
      console.log('Application accepted');
      await loadApplication();
    } catch (error) {
      console.error('Error accepting application:', error);
    }
  };

  const handleReject = async () => {
    try {
      await api.post(API_ENDPOINTS.REJECT_APPLICATION + `${aid}`);
      console.log('Application rejected');
      loadApplication();
    } catch (error) {
      console.error('Error rejecting application:', error);
    }
  };

  return (
    <>
      {application && (
        <div className="profile-wrapper">
          <div className="profile-picture">
            <img
              id="profile-picture"
              src="https://img.freepik.com/free-vector/college-university-students-group-young-happy-people-standing-isolated-white-background_575670-66.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699488000&semt=ais"
              alt=""
            />
          </div>
          <div className="profile-details">
            <div className="">
              <ul>
                <li className="foodd">
                  <h3>Application Number: {application.aid} </h3>
                  <Link to={`/admin/updateapplication/${application.aid}`}>
                  <Edit
                    style={{
                      color: 'gray',
                      fontSize: '30px',
                      marginRight: '30px',
                    }}
                  />
                  </Link>
                  <Link className="home-back-btn" to="/admin/application">
                  <HomeIcon
                    style={{
                      color: 'gray',
                      fontSize: '40px',
                    }}
                  />
                </Link>
                  <br />
                  <li className="foodd">
                    <h5>
                      <b>Name: </b>
                      {application.name}
                    </h5>
                  </li>
                  <li className="foodd">
                    <h5>
                      <b>Father Name : </b> {application.fathername}
                    </h5>
                  </li>
                  <li className="foodd">
                    <h5>
                      <b>Mother Name:</b> {application.mothername}
                    </h5>
                  </li>
                  <li className="foodd">
                    <h5>
                      <b>Mobile:</b> {application.mobile}
                    </h5>
                  </li>
                  <li className="foodd">
                    <h5>
                      <b>DOB:</b> {application.dob}
                    </h5>
                  </li>
                  <li className="foodd">
                    <h5>
                      <b>Aadhar:</b> {application.aadhar}
                    </h5>
                  </li>
                  <li className="foodd">
                    <h5>
                      <b>EMIS:</b> {application.emis}
                    </h5>
                  </li>
                  <li className="foodd">
                    <h5>
                      <b>Occupation:</b> {application.occupation}
                    </h5>
                  </li>
                  <li className="foodd">
                    <h5>
                      <b>Address:</b> {application.address}
                    </h5>
                  </li>
                  <li className="foodd">
                    <h5>
                      <b>Parent's Email:</b> {application.parentemail}
                    </h5>
                  </li>
                  {/* <li className="foodd">
                    <h5>
                      <b>Gender:</b> {application.gender}
                    </h5>
                  </li> */}
                  <li className="foodd">
                    <h5>
                      <b>Admission Status:</b> {application.admissionStatus}
                    </h5>
                  </li>
                  <li className="foodd">
                    <h5>
                      <b>Payment Status:</b> {application.paymentStatus}
                    </h5>
                  </li>
                  <li className="foodd">
                  <h5>
                    <b>Interview Schedule:</b>{' '}
                    {application.interviewSchedule === 'Scheduled' ? (
                      <>
                      <p>Interview Scheduled on:{' '}
                      {new Date(application.interviewDate).toLocaleDateString()}</p>{' '}
                        <p>Interview Time: {application.interviewTime}</p>
                      </>
                    ) : (
                      application.interviewSchedule
                    )}
                  </h5>
                </li>
                </li>
              </ul>
              <div>
                
                {application.paymentStatus === 'Paid' &&
                application.admissionStatus === 'Approved' ? (
                  application.interviewSchedule !== 'Scheduled' ? (
                    <Link to={`/admin/interview/${aid}`}>
                      <button
                        className="schedule-interview-btn"
                        onClick={() => console.log('Schedule Interview')}
                        style={{
                          color: 'black',
                          background: 'rgb(175, 175, 246)',
                          borderRadius: '10px',
                          padding: '5px',
                          marginLeft: '15px',
                        }}
                      >
                        Schedule Interview
                      </button>
                    </Link>
                  ) : null
                ) : (
                  <>
                    <button
                      className="accept-btn"
                      onClick={handleAccept}
                      style={{
                        background: 'rgb(209, 235, 177)',
                        borderRadius: '10px',
                        padding: '5px',
                        marginLeft: '15px',
                      }}
                    >
                      <CheckIcon style={{ color: 'green', fontSize: '24px' }} />
                      Accept
                    </button>
                    <button
                      className="reject-btn"
                      onClick={handleReject}
                      style={{
                        background: 'rgb(244, 170, 170)',
                        borderRadius: '10px',
                        padding: '5px',
                        marginLeft: '15px',
                      }}
                    >
                      <ClearIcon style={{ color: 'red', fontSize: '24px' }} />
                      Reject
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewApplication;
