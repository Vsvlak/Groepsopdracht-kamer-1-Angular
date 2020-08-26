import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewKlassenPageComponent } from './view-klassen-page.component';

describe('ViewKlassenPageComponent', () => {
  let component: ViewKlassenPageComponent;
  let fixture: ComponentFixture<ViewKlassenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewKlassenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewKlassenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
