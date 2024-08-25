// src/components/CourseInstanceListing.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function CourseInstanceListing() {
  const { year, semester } = useParams();
  const [instances, setInstances] = useState([]);

  useEffect(() => {
    axios.get(`/api/instances/${year}/${semester}`)
      .then(response => setInstances(response.data))
      .catch(error => console.error('Error fetching course instances:', error));
  }, [year, semester]);

  return (
    <div>
      <h1>Course Instance Listing</h1>
      <Link to={`/create-course-instance`}>Create New Course Instance</Link>
      <ul>
        {instances.map(instance => (
          <li key={instance.id}>
            <Link to={`/instance/${year}/${semester}/${instance.id}`}>{instance.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseInstanceListing;
