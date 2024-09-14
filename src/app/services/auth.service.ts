import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private roles: string[] = [];
  private loggedInSubject: BehaviorSubject<boolean>;

  constructor() {
    this.loggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn())
    this.loadRolesFromLocalStorage();
   }

  isLoggedIn() {
    return localStorage.getItem('token') ? true : false;
  }

  get loggedIn$(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }

  getUserRoles(): string[] {
    return this.roles;
  }

  setRoles(roles: string[]): void {
    this.roles = roles;
    localStorage.setItem('roles', JSON.stringify(roles));
    this.loggedInSubject.next(true);
  }

  clear() {
    localStorage.clear();
    this.loggedInSubject.next(false);
  }

  private loadRolesFromLocalStorage(): void {
    const roles = localStorage.getItem('roles');
    if (roles) {
      this.roles = JSON.parse(roles);
    }
  }
 }
