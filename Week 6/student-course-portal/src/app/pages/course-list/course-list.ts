import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses = [
    {
      id: 1,
      name: 'Angular Fundamentals',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: true
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
      name: 'Python for Developers',
      code: 'PY301',
      credits: 4,
      gradeStatus: 'failed',
      enrolled: false
    },
    {
      id: 4,
      name: 'Database Systems',
      code: 'DB401',
      credits: 3,
      gradeStatus: 'passed',
      enrolled: true
    },
    {
      id: 5,
      name: 'Cloud Computing',
      code: 'CC501',
      credits: 4,
      gradeStatus: 'pending',
      enrolled: false
    }
  ];

  selectedCourseId: number | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
  }

  // trackBy improves performance by preventing Angular
  // from re-rendering unchanged list items.
  trackByCourseId(index: number, course: any) {
    return course.id;
  }

}