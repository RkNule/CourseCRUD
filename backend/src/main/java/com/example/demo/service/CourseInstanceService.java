package com.example.demo.service;

import com.example.demo.model.CourseInstance;
import com.example.demo.repository.CourseInstanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseInstanceService {
    @Autowired
    private CourseInstanceRepository courseInstanceRepository;

    public List<CourseInstance> getCourseInstances(int year, int semester) {
        return courseInstanceRepository.findByYearAndSemester(year, semester);
    }

    public CourseInstance getCourseInstanceById(Long id) {
        return courseInstanceRepository.findById(id).orElse(null);
    }

    public CourseInstance createCourseInstance(CourseInstance courseInstance) {
        return courseInstanceRepository.save(courseInstance);
    }

    public void deleteCourseInstance(Long id) {
        courseInstanceRepository.deleteById(id);
    }
}
