import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CourseList } from './course-list';

describe('CourseList', () => {

  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;
  let store: MockStore;

  const initialState = {
    course: {
      courses: [
        {
          id: 1,
          name: 'Angular',
          code: 'ANG101',
          credits: 4,
          gradeStatus: 'passed',
          enrolled: false
        }
      ],
      loading: false,
      error: null
    }
  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CourseList],
      providers: [
        provideHttpClient(),
        provideRouter([]),
        provideMockStore({
          initialState
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with mock store', () => {
    expect(store).toBeTruthy();
  });

  it('should update the mock store state', () => {

    store.setState({
      course: {
        courses: [],
        loading: true,
        error: null
      }
    });

    fixture.detectChanges();

    expect(component).toBeTruthy();

  });

});