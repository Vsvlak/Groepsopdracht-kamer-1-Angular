import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeerlingenPageComponent } from './view-leerlingen-page.component';

describe('ViewLeerlingenPageComponent', () => {
  let component: ViewLeerlingenPageComponent;
  let fixture: ComponentFixture<ViewLeerlingenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLeerlingenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLeerlingenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
