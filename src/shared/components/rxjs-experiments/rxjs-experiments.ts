import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import * as txt from '../../../assets/dialogues/subscribe.json';

interface Teste {
  id: number;
  type: string;
  model: string;
  hasPermissionToEnter: boolean;
}
@Component({
  selector: 'app-rxjs-experiments',
  imports: [],
  templateUrl: './rxjs-experiments.html',
  styleUrl: './rxjs-experiments.scss',
})
export class RxjsExperiments implements OnInit {
  content = '';
  dialogue = '';
  explanation = '';

  carsArray = of([
    { id: 1, type: 'car', model: 'fusca', hasPermissionToEnter: true },
  ]);

  currentVehicle = <Teste>{};

  ngOnInit() {
    this.executeSubscribeLesson();
    this.carsArray.subscribe((x) => (this.currentVehicle = x[0]));
  }

  executeSubscribeLesson() {
    this.content = 'Subscribe';
    const operator = txt.dialogues.operator.operator + ': ';
    const operatorSpeech = txt.dialogues.operator;

    this.dialogue = operator + operatorSpeech[1];
    this.dialogue = operator + operatorSpeech[2];
    this.dialogue = operator + operatorSpeech[3];
    this.dialogue = operator + operatorSpeech[4];

    this.explanation = txt.lesson.subscribe.explanation;
  }
}
