import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor() { }

  login(username: string, password: string): boolean {
    // Check credentials (e.g., against backend)
    if (username === 'user' && password === 'password') {
      this.loggedIn = true;
      return true; // Return true for successful login
    } else {
      this.loggedIn = false;
      return false; // Return false for failed login
    }
  }

  logout() {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  register(username: string, password: string) {
    // Implement user registration logic (e.g., sending data to backend)
  }
}
