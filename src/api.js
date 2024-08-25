// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Adjust this if needed

export const getAllCourses = () => axios.get(`${API_BASE_URL}/courses`);
export const getCourseById = (id) => axios.get(`${API_BASE_URL}/courses/${id}`);
export const createCourse = (course) => axios.post(`${API_BASE_URL}/courses`, course);
export const deleteCourse = (id) => axios.delete(`${API_BASE_URL}/courses/${id}`);
export const getCourseInstances = (year, semester) => axios.get(`${API_BASE_URL}/instances/${year}/${semester}`);
export const getCourseInstanceById = (year, semester, id) => axios.get(`${API_BASE_URL}/instances/${year}/${semester}/${id}`);
export const createCourseInstance = (instance) => axios.post(`${API_BASE_URL}/instances`, instance);
export const deleteCourseInstance = (year, semester, id) => axios.delete(`${API_BASE_URL}/instances/${year}/${semester}/${id}`);
