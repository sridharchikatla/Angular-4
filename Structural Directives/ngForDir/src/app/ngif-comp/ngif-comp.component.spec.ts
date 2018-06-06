import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifCompComponent } from './ngif-comp.component';

describe('NgifCompComponent', () => {
  let component: NgifCompComponent;
  let fixture: ComponentFixture<NgifCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
