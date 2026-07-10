import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Course } from '../models/course.model';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}
getCourses(): Observable<Course[]> {

  return this.http.get<Course[]>(this.apiUrl).pipe(

    map(courses =>
      courses.filter(c => c.credits > 0)
    ),

    tap(courses => {
      console.log('Courses loaded:', courses.length);
    }),

    retry(2),

    catchError(err => {

      console.error(err);

      return throwError(() =>
        new Error('Failed to load courses.')
      );

    })

  );

}
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }
  loadCourseAndStudents(id: number): Observable<Course> {

  return this.getCourseById(id).pipe(

    switchMap(course => {

      console.log('Selected Course:', course);

      // In a real application, another HTTP request would go here.
      return of(course);

    })

  );

}

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${course.id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}