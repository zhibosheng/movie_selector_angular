import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwngroupComponent } from './owngroup.component';

describe('OwngroupComponent', () => {
  let component: OwngroupComponent;
  let fixture: ComponentFixture<OwngroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwngroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwngroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
