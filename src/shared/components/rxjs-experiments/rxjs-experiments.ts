import { Component, OnInit } from '@angular/core';
import {
  concatMap,
  from,
  interval,
  Observable,
  of,
  skip,
  take,
  timer,
} from 'rxjs';
import * as txt from '../../../assets/dialogues/subscribe.json';

interface Teste {
  id: number;
  type: string;
  model: string;
  hasPermissionToEnter: boolean;
}

type DialogueItem = { value: string; delay: number };
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
    const operatorName = txt.dialogues.operator.operator;
    const rawSpeech = txt.dialogues.operator as unknown as Record<
      string,
      DialogueItem
    >;

    let index = 1;
    const lastIndex = 4;

    const next$ = (): Observable<null> => {
      if (index > lastIndex) return of(null);

      const item = rawSpeech[index.toString()];

      if (!item) return of(null);

      return timer(item.delay).pipe(
        concatMap(() => {
          this.dialogue = operatorName + ': ' + item.value;
          index++;
          return next$();
        })
      );
    };

    next$().subscribe();

    this.explanation = txt.lesson.subscribe.explanation;
  }
}
