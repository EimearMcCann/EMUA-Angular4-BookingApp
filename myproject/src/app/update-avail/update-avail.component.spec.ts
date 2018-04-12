import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAvailComponent } from './update-avail.component';

describe('UpdateAvailComponent', () => {
  let component: UpdateAvailComponent;
  let fixture: ComponentFixture<UpdateAvailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAvailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAvailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
