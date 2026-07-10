import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
  FormArray,
  FormControl,
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {

  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [Validators.required, Validators.minLength(3)]
      ],

      studentEmail: [
        '',
        [Validators.required, Validators.email],
        [this.simulateEmailCheck()]
      ],

      courseId: [
        '',
        [Validators.required, this.noCourseCode]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],

      additionalCourses: this.fb.array([])

    });

  }

  // value excludes disabled controls
  // getRawValue() includes disabled controls

 onSubmit() {
  alert("Submit clicked!");

  console.log("Submit clicked");
  console.log(this.enrollForm.value);
  console.log(this.enrollForm.getRawValue());

  }

  noCourseCode(control: AbstractControl): ValidationErrors | null {

    if (
      control.value &&
      control.value.toString().startsWith('XX')
    ) {

      return { noCourseCode: true };

    }

    return null;

  }

  simulateEmailCheck(): AsyncValidatorFn {

    return (control: AbstractControl) => {

      return new Promise(resolve => {

        setTimeout(() => {

          if (
            control.value &&
            control.value.includes('test@')
          ) {

            resolve({ emailTaken: true });

          } else {

            resolve(null);

          }

        }, 800);

      });

    };

  }

 get additionalCourses(): FormArray<FormControl> {

  return this.enrollForm.get('additionalCourses') as FormArray<FormControl>;

}
 addCourse() {

  this.additionalCourses.push(

    new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    })

  );

}
  removeCourse(index: number) {

    this.additionalCourses.removeAt(index);

  }

}