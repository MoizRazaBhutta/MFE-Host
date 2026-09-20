import { Component, inject, OnInit, signal } from '@angular/core';
import { SessionService } from './services/session';
import { registerApplication, start } from 'single-spa';
import { CommonModule } from '@angular/common';
const system = (window as any).System;
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('shell-host');
  private sessionService = inject(SessionService);
  session$ = this.sessionService.session$;

  ngOnInit(): void {
    // 1. Register MFE 1
    registerApplication({
      name: '@hub/mfe-driver',
      app: () => system.import('@hub/mfe-driver'),
      activeWhen: (location) => location.pathname.startsWith('/drivers') || location.pathname === '/'
    });

    // 2. Register MFE 2: Dispatch Workspace with customProps Handshake
    registerApplication({
      name: '@hub/mfe-dispatch',
      app: () => system.import('@hub/mfe-dispatch'),
      activeWhen: (location) => location.pathname.startsWith('/dispatch'),
      customProps: () => ({
        session: this.sessionService.currentSession,
        session$: this.sessionService.session$
      })
    });
    // 3. Start the single-spa application
    start();
  }
}
