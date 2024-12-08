import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LodgingPage } from './lodging.page';

describe('LodgingPage', () => {
  let component: LodgingPage;
  let fixture: ComponentFixture<LodgingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
