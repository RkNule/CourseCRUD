// src/components/CreateCourseInstance.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateCourseInstance.css';

function CreateCourseInstance() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/instances', { name })
      .then(() => navigate('/course-instances'))
      .catch(error => console.error('Error creating course instance:', error));
  };

  return (
    <div>
      <h1>Create Course Instance</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Course Instance Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateCourseInstance;
