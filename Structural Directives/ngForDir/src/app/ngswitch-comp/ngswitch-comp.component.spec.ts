import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchCompComponent } from './ngswitch-comp.component';

describe('NgswitchCompComponent', () => {
  let component: NgswitchCompComponent;
  let fixture: ComponentFixture<NgswitchCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgswitchCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswitchCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
