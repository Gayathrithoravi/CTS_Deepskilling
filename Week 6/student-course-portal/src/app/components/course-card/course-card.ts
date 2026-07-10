import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

import { EnrollmentService } from '../../services/enrollment';

import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';


@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input() course!: Course;

  @Output() enrollRequested = new EventEmitter<number>();

 constructor(
  public enrollmentService: EnrollmentService,
  private courseService: CourseService
) {}
  isExpanded = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['course']);
  }

  enroll() {
    this.enrollRequested.emit(this.course.id);
  }

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }
  updateCourse() {

  const updated: Course = {

    ...this.course,

    name: this.course.name + ' (Updated)'

  };

  this.courseService.updateCourse(updated).subscribe({

    next: () => {

      alert('Course Updated');

    }

  });

}

deleteCourse() {

  this.courseService.deleteCourse(this.course.id).subscribe({

    next: () => {

      alert('Course Deleted');

    }

  });

}

  toggleEnrollment() {

    if (this.enrollmentService.isEnrolled(this.course.id)) {

      this.enrollmentService.unenroll(this.course.id);

    } else {

      this.enrollmentService.enroll(this.course.id);

    }

  }

  get cardClasses() {
    return {
      'card--enrolled': this.course.enrolled,
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  get borderColor() {

    switch (this.course.gradeStatus) {

      case 'passed':
        return 'green';

      case 'failed':
        return 'red';

      default:
        return 'gray';
    }

  }

}