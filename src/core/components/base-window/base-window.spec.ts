import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseWindow } from './base-window';

describe('BaseWindow', () => {
  let component: BaseWindow;
  let fixture: ComponentFixture<BaseWindow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseWindow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseWindow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
