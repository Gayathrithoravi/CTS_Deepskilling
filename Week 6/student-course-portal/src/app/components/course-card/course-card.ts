import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { Highlight } from '../../directives/highlight';
@Component({
  selector: 'app-course-card',
  standalone: true,
imports: [
  CommonModule,
  Highlight,
  CreditLabelPipe
],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input() course: any;

  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  enroll() {
    this.enrollRequested.emit(this.course.id);
  }

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  // Getter keeps the template clean.
  get cardClasses() {
    return {
      'card--enrolled': this.course.enrolled,
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

}