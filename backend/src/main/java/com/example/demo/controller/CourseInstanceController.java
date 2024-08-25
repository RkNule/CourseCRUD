package com.example.demo.controller;

import com.example.demo.model.CourseInstance;
import com.example.demo.service.CourseInstanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/instances")
public class CourseInstanceController {
    @Autowired
    private CourseInstanceService courseInstanceService;

    @GetMapping("/{year}/{semester}")
    public List<CourseInstance> getCourseInstances(@PathVariable int year, @PathVariable int semester) {
        return courseInstanceService.getCourseInstances(year, semester);
    }

    @GetMapping("/{year}/{semester}/{id}")
    public CourseInstance getCourseInstanceById(@PathVariable int year, @PathVariable int semester, @PathVariable Long id) {
        return courseInstanceService.getCourseInstanceById(id);
    }

    @PostMapping
    public CourseInstance createCourseInstance(@RequestBody CourseInstance courseInstance) {
        return courseInstanceService.createCourseInstance(courseInstance);
    }

    @DeleteMapping("/{year}/{semester}/{id}")
    public void deleteCourseInstance(@PathVariable int year, @PathVariable int semester, @PathVariable Long id) {
        courseInstanceService.deleteCourseInstance(id);
    }
}
