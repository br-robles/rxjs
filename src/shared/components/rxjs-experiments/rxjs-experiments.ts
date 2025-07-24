import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-rxjs-experiments',
  imports: [],
  templateUrl: './rxjs-experiments.html',
  styleUrl: './rxjs-experiments.scss',
})
export class RxjsExperiments implements OnInit {
  carsArray = [{ id: 1, type: 'car', model: 'fusca' }];

  currentCar = '';

  ngOnInit() {
    interval(2000).subscribe(() => {
      if (this.currentCar === '' || this.currentCar === 'explodiu') {
        this.currentCar = this.carsArray[0].model;
        return;
      }

      if (this.currentCar) {
        this.currentCar = 'explodiu';
        return;
      }
    });
  }
}
