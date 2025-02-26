import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorMessage: String | null = null;

  constructor(private userService: UserService, private authService: AuthService,
     private router: Router) { }
  
  onSubmit(form: NgForm): void {
    if (form.valid) {
      const loginData = form.value;

      this.userService.getAllUsers().subscribe(
        (users: User[]) => {

          const user = users.find(u => u.email === loginData.email && u.password === loginData.password);
          if (user) {
            console.log('Login successful', user);
            this.userService.login(user);
            this.authService.login();
            this.router.navigate(['/restaurants']);
          } else {
            this.errorMessage = 'Invalid credentials';
          }
        },
        error => {
          this.errorMessage = 'Error fetching users';
        }
      );
    }
  }
}