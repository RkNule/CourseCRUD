// src/components/CourseInstanceDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './CourseInstanceDetails.css';

function CourseInstanceDetails() {
  const { year, semester, id } = useParams();
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    axios.get(`/api/instances/${year}/${semester}/${id}`)
      .then(response => setInstance(response.data))
      .catch(error => console.error('Error fetching course instance details:', error));
  }, [year, semester, id]);

  if (!instance) return <p>Loading...</p>;

  return (
    <div>
      <h1>{instance.name}</h1>
      <p>Year: {instance.year}</p>
      <p>Semester: {instance.semester}</p>
      {/* Add functionality to delete or update course instance */}
      <button onClick={() => {
        axios.delete(`/api/instances/${year}/${semester}/${id}`)
          .then(() => alert('Course instance deleted'))
          .catch(error => console.error('Error deleting course instance:', error));
      }}>Delete</button>
    </div>
  );
}

export default CourseInstanceDetails;
