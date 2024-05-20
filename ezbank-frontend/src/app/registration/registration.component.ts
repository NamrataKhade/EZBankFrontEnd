import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.username, this.password);
  }
}
