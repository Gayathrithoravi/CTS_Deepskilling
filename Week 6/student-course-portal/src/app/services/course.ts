import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [

    {
      id: 1,
      name: 'Angular Fundamentals',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: false
    },

    {
      id: 2,
      name: 'Java Programming',
      code: 'JAVA201',
      credits: 3,
      gradeStatus: 'pending',
      enrolled: false
    },

    {
      id: 3,
      name: 'Python',
      code: 'PY301',
      credits: 4,
      gradeStatus: 'failed',
      enrolled: false
    },

    {
      id: 4,
      name: 'Database Systems',
      code: 'DB401',
      credits: 2,
      gradeStatus: 'passed',
      enrolled: false
    },

    {
      id: 5,
      name: 'Cloud Computing',
      code: 'CC501',
      credits: 5,
      gradeStatus: 'pending',
      enrolled: false
    }

  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(c => c.id === id);
  }

  addCourse(course: Course) {
    this.courses.push(course);
  }

}