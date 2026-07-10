import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { EnrollmentForm } from './pages/enrollment-form/enrollment-form';
import { CourseList } from './pages/course-list/course-list';
import { ReactiveEnrollmentForm } from './pages/reactive-enrollment-form/reactive-enrollment-form';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  RouterOutlet,
  Header,
  ReactiveEnrollmentForm
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-course-portal');
}