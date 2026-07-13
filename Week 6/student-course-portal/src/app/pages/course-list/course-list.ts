import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  loadCourses
} from '../../store/course/course.actions';

import {
  selectAllCourses
} from '../../store/course/course.selectors';
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
  courses$!: Observable<Course[]>;
  selectedCourseId: number | null = null;
  searchTerm = '';

 constructor(
  private courseService: CourseService,
  private router: Router,
  private route: ActivatedRoute,
  private store: Store
) {}

  ngOnInit(): void {

    this.searchTerm =
      this.route.snapshot.queryParamMap.get('search') ?? '';

    this.courses$ = this.store.select(selectAllCourses);

this.store.dispatch(loadCourses());
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