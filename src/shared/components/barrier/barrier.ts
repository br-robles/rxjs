import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import {
  BehaviorSubject,
  distinctUntilChanged,
  filter,
  Observable,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-barrier',
  imports: [],
  templateUrl: './barrier.html',
  styleUrl: './barrier.scss',
})
export class Barrier implements OnInit {
  @Input() set onOpenBar(value: boolean) {
    this._canOpenBar$.next(value);
  }

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private _canOpenBar$ = new BehaviorSubject<boolean>(false);

  ngOnInit() {
    this._canOpenBar$
      .pipe(
        filter((value) => value !== null && value !== undefined),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        this.openBar(value);
      });
  }

  openBar(value: boolean) {
    if (!value) return;

    const target = this.el.nativeElement.querySelector('.bar');
    if (target) this.renderer.setStyle(target, 'transform', `rotate(0deg)`);
  }
}
