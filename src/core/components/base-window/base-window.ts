import { Component } from '@angular/core';
import { RxjsExperiments } from '../../../shared/components/rxjs-experiments/rxjs-experiments';
import { Barrier } from '../../../shared/components/barrier/barrier';
import { Operator } from '../../../shared/components/operator/operator';
import { Vehicle } from '../../../shared/components/vehicle/vehicle';

@Component({
  selector: 'app-base-window',
  imports: [RxjsExperiments, Barrier, Operator, Vehicle],
  templateUrl: './base-window.html',
  styleUrl: './base-window.scss',
})
export class BaseWindow {
  canOpenBar!: boolean;
}
