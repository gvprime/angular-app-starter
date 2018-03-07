import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPageComponent } from './box-page.component';

describe('BoxPageComponent', () => {
  let component: BoxPageComponent;
  let fixture: ComponentFixture<BoxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
