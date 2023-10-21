import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipelHomeComponent } from './principel-home.component';

describe('PrincipelHomeComponent', () => {
  let component: PrincipelHomeComponent;
  let fixture: ComponentFixture<PrincipelHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipelHomeComponent]
    });
    fixture = TestBed.createComponent(PrincipelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
