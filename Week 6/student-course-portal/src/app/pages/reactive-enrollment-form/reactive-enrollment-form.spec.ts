import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { ReactiveEnrollmentForm } from './reactive-enrollment-form';

describe('ReactiveEnrollmentForm', () => {
  let component: ReactiveEnrollmentForm;
  let fixture: ComponentFixture<ReactiveEnrollmentForm>;

  beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [ReactiveEnrollmentForm],
    providers: [
      provideHttpClient(),
      provideStore({})
    ]
  }).compileComponents();

  fixture = TestBed.createComponent(ReactiveEnrollmentForm);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
