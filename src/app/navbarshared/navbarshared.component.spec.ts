import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarsharedComponent } from './navbarshared.component';

describe('NavbarsharedComponent', () => {
  let component: NavbarsharedComponent;
  let fixture: ComponentFixture<NavbarsharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarsharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarsharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
