import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDocentVakPageComponent } from './view-docent-vak-page.component';

describe('ViewDocentVakPageComponent', () => {
  let component: ViewDocentVakPageComponent;
  let fixture: ComponentFixture<ViewDocentVakPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDocentVakPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDocentVakPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
