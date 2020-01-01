import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAndTopComponent } from './feature-and-top.component';

describe('FeatureAndTopComponent', () => {
  let component: FeatureAndTopComponent;
  let fixture: ComponentFixture<FeatureAndTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureAndTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureAndTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
