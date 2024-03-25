import React from 'react';
import '../../assets/css/interviewScheduler.css'

const TimePicker = ({ value, onChange }) => {
  return (
    <div className="time-picker-container">
      <label className='label'>Select a Time:</label>
      <input className='input-time' type="time" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default TimePicker;
