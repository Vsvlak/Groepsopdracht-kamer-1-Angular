import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlasleerlingtabelComponent } from './klasleerlingtabel.component';

describe('KlasleerlingtabelComponent', () => {
  let component: KlasleerlingtabelComponent;
  let fixture: ComponentFixture<KlasleerlingtabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlasleerlingtabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlasleerlingtabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
