import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerApplication, start } from 'single-spa';
import { SessionService } from './services/session';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('shell-host');
  private sessionService = inject(SessionService);

  ngOnInit(): void {
    registerApplication({
      name: '@hub/mfe-driver',
      app: () =>
        import(/* @vite-ignore */ 'http://localhost:4201/main.js').then((m) => m.default ?? m),
      activeWhen: (location) => location.pathname.startsWith('/drivers'),
    });

    start();
  }

  singleSpaNavigate(event: Event) {
    event.preventDefault();
    (window as any).singleSpaNavigate?.('/drivers');
  }
}
