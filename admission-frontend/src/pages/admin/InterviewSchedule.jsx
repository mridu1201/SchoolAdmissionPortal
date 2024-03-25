import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TimePicker from './TimePicker';
import api from '../../services/axiosInstances';
import API_ENDPOINTS from '../../services/axiosEndpoints';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import '../../assets/css/interviewScheduler.css';

const InterviewScheduler = () => {
  const [interviewDate, setInterviewDate] = useState(new Date());
  const [interviewTime, setInterviewTime] = useState('');
  const { aid } = useParams();
  const navigate=useNavigate();

  const handleDateChange = (newDate) => {
    setInterviewDate(newDate);
  };

  const handleTimeChange = (newTime) => {
    setInterviewTime(newTime);
  };

  const handleSchedule = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(API_ENDPOINTS.SCHEDULE_INTERVIEW + `${aid}`, {
        interviewDate: interviewDate,
        interviewTime: interviewTime,
      });

      if (response.status === 200) {
        toast.success('Interview Scheduled');
        navigate("/admin/application");
      } else {
        toast.error("Couldn't schedule interview");
      }
    } catch (error) {
      console.error('Error scheduling interview:', error);
      toast.error("Couldn't schedule interview");
    }
  };

  return (
    <div className="interview-scheduler-container">
      <h2>Schedule Interview</h2>
      <div className="interview-scheduler-content">
        <Calendar onChange={handleDateChange} value={interviewDate} />
        <TimePicker value={interviewTime} onChange={handleTimeChange} />
        <button className="schedule-button" onClick={handleSchedule}>
          Schedule
        </button>
      </div>
    </div>
  );
};

export default InterviewScheduler;
