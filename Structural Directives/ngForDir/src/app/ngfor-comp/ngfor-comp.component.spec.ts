import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforCompComponent } from './ngfor-comp.component';

describe('NgforCompComponent', () => {
  let component: NgforCompComponent;
  let fixture: ComponentFixture<NgforCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
