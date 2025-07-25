import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import * as txt from '../../../assets/dialogues/subscribe.json';

@Component({
  selector: 'app-rxjs-experiments',
  imports: [],
  templateUrl: './rxjs-experiments.html',
  styleUrl: './rxjs-experiments.scss',
})
export class RxjsExperiments implements OnInit {
  content = '';
  dialogue = '';
  carsArray = of([{ id: 1, type: 'car', model: 'fusca' }]);

  currentCar = '';

  ngOnInit() {
    this.subscribe();
    const teste = this.carsArray.subscribe((x) => console.log(x));
  }

  subscribe() {
    this.content = 'Subscribe';
    const operator = txt.dialogues.operator.operator + ': ';
    const operatorSpeech = txt.dialogues.operator;

    this.dialogue = operator + operatorSpeech[1];
    this.dialogue = operator + operatorSpeech[2];
    this.dialogue = operator + operatorSpeech[3];
    this.dialogue = operator + operatorSpeech[4];
  }
}
