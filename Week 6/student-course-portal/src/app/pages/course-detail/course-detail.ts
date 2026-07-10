import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail implements OnInit {

  course?: Course;

  constructor(

    private route: ActivatedRoute,

    private courseService: CourseService

  ) {}

  ngOnInit() {

    const id = Number(

      this.route.snapshot.paramMap.get('id')

    );

    this.course = this.courseService.getCourseById(id);

  }

}