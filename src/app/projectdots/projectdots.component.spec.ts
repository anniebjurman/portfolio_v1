import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdotsComponent } from './projectdots.component';

describe('ProjectdotsComponent', () => {
  let component: ProjectdotsComponent;
  let fixture: ComponentFixture<ProjectdotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectdotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
