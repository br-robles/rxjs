import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-barrier',
  imports: [],
  templateUrl: './barrier.html',
  styleUrl: './barrier.scss',
})
export class Barrier implements OnInit, AfterViewInit {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private canOpenBar: boolean = false;

  /* @Input() set rotateBar(value: string) {
    const target = this.el.nativeElement.querySelector('.bar');

    if (target) this.renderer.setStyle(target, 'transform', `rotate(${value})`);
  } */

  ngOnInit() {
    timer(5000).subscribe(() => this.openBar());
  }

  ngAfterViewInit() {}

  openBar() {
    // @TODO: Has to implement this validation;
    //if (this.canOpenBar) {}

    const target = this.el.nativeElement.querySelector('.bar');
    if (target) this.renderer.setStyle(target, 'transform', `rotate(0deg)`);
  }
}
