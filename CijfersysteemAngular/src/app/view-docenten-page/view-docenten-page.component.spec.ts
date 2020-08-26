import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDocentenPageComponent } from './view-docenten-page.component';

describe('ViewDocentenPageComponent', () => {
  let component: ViewDocentenPageComponent;
  let fixture: ComponentFixture<ViewDocentenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDocentenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDocentenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
