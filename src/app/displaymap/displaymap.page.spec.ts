import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplaymapPage } from './displaymap.page';

describe('DisplaymapPage', () => {
  let component: DisplaymapPage;
  let fixture: ComponentFixture<DisplaymapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaymapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
