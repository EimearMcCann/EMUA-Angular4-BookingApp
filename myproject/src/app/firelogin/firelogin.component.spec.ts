import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireloginComponent } from './firelogin.component';

describe('FireloginComponent', () => {
  let component: FireloginComponent;
  let fixture: ComponentFixture<FireloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
