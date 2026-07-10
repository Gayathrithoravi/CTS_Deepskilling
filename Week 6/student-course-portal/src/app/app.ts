import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { ReactiveEnrollmentForm } from './pages/reactive-enrollment-form/reactive-enrollment-form';
import { CourseSummaryWidget } from './components/course-summary-widget/course-summary-widget';
import { Notification } from './components/notification/notification';
import { StudentProfile } from './pages/student-profile/student-profile';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Home,
    CourseList,
    CourseSummaryWidget,
    ReactiveEnrollmentForm,
    StudentProfile,
    Notification
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-course-portal');
}