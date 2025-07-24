import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsExperiments } from './rxjs-experiments';

describe('RxjsExperiments', () => {
  let component: RxjsExperiments;
  let fixture: ComponentFixture<RxjsExperiments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsExperiments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsExperiments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
