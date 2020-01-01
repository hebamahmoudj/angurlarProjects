import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideNewsComponent } from './left-side-news.component';

describe('LeftSideNewsComponent', () => {
  let component: LeftSideNewsComponent;
  let fixture: ComponentFixture<LeftSideNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSideNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
