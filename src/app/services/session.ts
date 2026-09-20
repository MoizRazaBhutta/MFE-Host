import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
export interface UserSession {
  userId: string;
  name: string;
  token: string;
  role: string;
}
@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private sessionSubject = new BehaviorSubject<UserSession>({
    userId: 'USR-0001',
    name: 'Abdul Moiz',
    token: 'jwt-bearer-xyz-123',
    role: 'Lead Operator',
  });

  session$ = this.sessionSubject.asObservable();

  get currentSession(): UserSession {
    return this.sessionSubject.value;
  }

  updateSession(session: UserSession): void {
    this.sessionSubject.next(session);
  }

  logout(): void {
    this.sessionSubject.next({
      userId: '',
      name: '',
      token: '',
      role: '',
    });
  }
}
