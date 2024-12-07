import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JeepneyRoutesPage } from './jeepney-routes.page';

describe('JeepneyRoutesPage', () => {
  let component: JeepneyRoutesPage;
  let fixture: ComponentFixture<JeepneyRoutesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JeepneyRoutesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
