import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVakkenPageComponent } from './view-vakken-page.component';

describe('ViewVakkenPageComponent', () => {
  let component: ViewVakkenPageComponent;
  let fixture: ComponentFixture<ViewVakkenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVakkenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVakkenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
