import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseService } from '../../services/course';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  availableCourses = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {

    this.courseService.getCourses().subscribe(courses => {

      this.availableCourses = courses.length;

    });

  }

  onEnrollClick(): void {

    this.message = 'Enrollment page opened!';

  }

}