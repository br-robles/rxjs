import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseWindow } from '../core/components/base-window/base-window';

@Component({
  selector: 'app-root',
  imports: [BaseWindow],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('rxjs');
}
