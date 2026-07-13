import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';

import {
  enrollInCourse,
  unenrollFromCourse
} from '../../store/enrollment/enrollment.actions';

import {
  selectEnrolledIds
} from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    CreditLabelPipe,
    Highlight
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input() course!: Course;

  @Output() enrollRequested = new EventEmitter<number>();

  enrolledIds$!: Observable<number[]>;

  isExpanded = false;

  constructor(
    private courseService: CourseService,
    private store: Store
  ) {
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['course']);
  }

  enroll() {
    this.enrollRequested.emit(this.course.id);
  }

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  toggleEnrollment() {

    this.enrolledIds$
      .pipe(take(1))
      .subscribe(ids => {

        if (ids.includes(this.course.id)) {

          this.store.dispatch(
            unenrollFromCourse({
              courseId: this.course.id
            })
          );

        } else {

          this.store.dispatch(
            enrollInCourse({
              courseId: this.course.id
            })
          );

        }

      });

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

 get cardClasses() {
  return {
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