import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;
  errorMessage = '';
  courses: Course[] = [];
  selectedCourseId: number | null = null;
  searchTerm = '';

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.searchTerm =
      this.route.snapshot.queryParamMap.get('search') ?? '';

    this.courseService.getCourses().subscribe({

      next: (courses) => {
        this.courses = courses;
      },

      error: (err) => {
        this.errorMessage = err.message;
        alert(err.message);
        this.isLoading = false;
      },

      complete: () => {
        this.isLoading = false;
      }

    });

  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
  }

  updateSearch() {
    this.router.navigate(
      ['/courses'],
      {
        queryParams: {
          search: this.searchTerm
        }
      }
    );
  }

  trackByCourseId(index: number, course: Course) {
    return course.id;
  }

}