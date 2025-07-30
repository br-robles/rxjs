import { Component, OnInit } from '@angular/core';
import {
  concat,
  concatMap,
  EMPTY,
  finalize,
  from,
  interval,
  Observable,
  of,
  skip,
  take,
  takeUntil,
  takeWhile,
  timer,
} from 'rxjs';
import * as txt from '../../../assets/dialogues/subscribe.json';

interface IVehicle {
  id: number;
  type: string;
  model: string;
  hasPermissionToEnter: boolean;
}

interface DialogueItem {
  value: string;
  delay: number;
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

  currentVehicle = <IVehicle>{};

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

      this.dialogue = operatorName + ': ' + item.value;

      return interval(1000).pipe(
        takeWhile((count) => count < item.delay),
        finalize(() => index++),
        concatMap(() => next$())
      );
    };

    next$().subscribe();

    this.explanation = txt.lesson.subscribe.explanation;
  }
}
