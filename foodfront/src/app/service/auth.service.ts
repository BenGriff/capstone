import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = new BehaviorSubject<boolean>(false);

  constructor() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.loggedInStatus.next(isLoggedIn);
  }

  get isLoggedIn() {
    return this.loggedInStatus.asObservable();
  }

  login() {
    this.loggedInStatus.next(true);
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    this.loggedInStatus.next(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  }
}