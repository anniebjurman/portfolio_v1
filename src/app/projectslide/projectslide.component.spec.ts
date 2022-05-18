import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectslideComponent } from './projectslide.component';

describe('ProjectslideComponent', () => {
  let component: ProjectslideComponent;
  let fixture: ComponentFixture<ProjectslideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectslideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
