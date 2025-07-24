import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barrier } from './barrier';

describe('Barrier', () => {
  let component: Barrier;
  let fixture: ComponentFixture<Barrier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Barrier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Barrier);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
