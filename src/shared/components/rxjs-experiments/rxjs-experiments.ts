import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() canOpenBar = new EventEmitter<boolean>();

  private _lessonTitle!: string;
  protected get lessonTitle() {
    return this._lessonTitle;
  }
  protected set lessonTitle(value) {
    this._lessonTitle = value;
  }

  private _dialogue!: string;
  protected get dialogue() {
    return this._dialogue;
  }
  protected set dialogue(value) {
    this._dialogue = value;
  }

  private _explanation!: string;
  protected get explanation(): string {
    return this._explanation;
  }
  protected set explanation(value: string) {
    this._explanation = value;
  }

  protected vehicleArray = of([
    { id: 1, type: 'car', model: 'fusca', hasPermissionToEnter: true },
  ]);

  currentVehicle = <IVehicle>{};

  ngOnInit() {
    this.executeSubscribeLesson();
    this.vehicleArray.subscribe(
      (vehicle) => (this.currentVehicle = vehicle[0])
    );
  }

  executeSubscribeLesson() {
    this.lessonTitle = 'Subscribe';
    const operatorName = txt.dialogues.operator.operator;
    const rawSpeech = txt.dialogues.operator as unknown as Record<
      string,
      DialogueItem
    >;

    let index = 1;
    const lastIndex = 4;

    const next$ = (): Observable<null> => {
      const dialogueEnded = index > lastIndex;
      if (dialogueEnded) {
        // @Todo: has to emit canOpenBar only after driver validated
        this.canOpenBar.emit(true);
        return of(null);
      }

      const item = rawSpeech[index.toString()];

      if (!item) return of(null);

      this.showInDialogueBox(operatorName, item.value);

      return interval(1000).pipe(
        takeWhile((count) => count < item.delay),
        finalize(() => index++),
        concatMap(() => next$())
      );
    };

    next$().subscribe();

    this.explanation = txt.lesson.subscribe.explanation;
  }

  showInDialogueBox(person: string, value: string) {
    this.dialogue = person + ': ' + value;
  }
}
