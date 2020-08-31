import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentvaktabelComponent } from './docentvaktabel.component';

describe('DocentvaktabelComponent', () => {
  let component: DocentvaktabelComponent;
  let fixture: ComponentFixture<DocentvaktabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentvaktabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentvaktabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
