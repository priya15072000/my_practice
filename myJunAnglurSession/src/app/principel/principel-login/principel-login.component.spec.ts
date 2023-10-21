import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipelLoginComponent } from './principel-login.component';

describe('PrincipelLoginComponent', () => {
  let component: PrincipelLoginComponent;
  let fixture: ComponentFixture<PrincipelLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipelLoginComponent]
    });
    fixture = TestBed.createComponent(PrincipelLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
