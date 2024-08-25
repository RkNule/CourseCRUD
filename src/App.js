// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseListing from './components/CourseListing';
import CreateCourse from './components/CreateCourse';
import CreateCourseInstance from './components/CreateCourseInstance';
import CourseDetails from './components/CourseDetails';
import CourseInstanceListing from './components/CourseInstanceListing';
import CourseInstanceDetails from './components/CourseInstanceDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<CourseListing />} />
          <Route path="/create-course" element={<CreateCourse />} />
          <Route path="/create-course-instance" element={<CreateCourseInstance />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/instances/:year/:semester" element={<CourseInstanceListing />} />
          <Route path="/instance/:year/:semester/:id" element={<CourseInstanceDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
