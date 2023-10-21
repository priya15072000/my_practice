import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipelSignupComponent } from './principel-signup.component';

describe('PrincipelSignupComponent', () => {
  let component: PrincipelSignupComponent;
  let fixture: ComponentFixture<PrincipelSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipelSignupComponent]
    });
    fixture = TestBed.createComponent(PrincipelSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
