import React, { useState } from 'react';
import '../css/Email.css';
import api from '../../services/axiosInstances';
import API_ENDPOINTS from '../../services/axiosEndpoints';

function Email() {
  const [fullName, setFullName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!fullName || !userEmail || !subject || !message) {
      console.error('Please fill in all the required fields');
      return;
    }

    const emailData = {
      from: userEmail,
      subject: subject,
      message: message,
    };

    api.post(`/student/contact-us/${userEmail}/${subject}/${message}`)
      .then((response) => {
        console.log(response.data);
        setFullName('');
        setUserEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="email">
        <div className="name-email">
          <div className='input-name'>
            <input
              id='form-inputt'
              type="text"
              className='name'
              placeholder='Full Name'
              value={fullName}
              onChange={handleFullNameChange}
            />
          </div>
          <div className="input-email">
            <input
              id='form-inputt'
              type="text"
              className="email"
              placeholder='Email'
              value={userEmail}
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <div className="email-sub">
          <input
            id='form-inputt'
            type="text"
            className="sub"
            placeholder='Subject'
            value={subject}
            onChange={handleSubjectChange}
          />
        </div>
        <div className="email-msg">
          <input
            id='form-inputt'
            type="text"
            placeholder='Message'
            className="msg"
            value={message}
            onChange={handleMessageChange}
          />
        </div>
        <div className='email-submit'>
          <button type="submit" className='submitt'>SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default Email;
