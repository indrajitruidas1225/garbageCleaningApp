import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitizenLoginPage } from './citizen-login.page';

describe('CitizenLoginPage', () => {
  let component: CitizenLoginPage;
  let fixture: ComponentFixture<CitizenLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CitizenLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
