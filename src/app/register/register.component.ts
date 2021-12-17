import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationDTO } from '../model/UserRegistrationDTO';
import { AlertsService } from '../service/alerts.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: UserRegistrationDTO = new UserRegistrationDTO
  confirmePassword: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alerts: AlertsService
    ) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  confirmPassword(event: any) {
    this.confirmePassword = event.target.value;
  }

  register() {
    if (this.user.password != this.confirmePassword) {
      this.alerts.showAlertDanger('As senhas estão incorretas');
    } else {
      this.authService
        .register(this.user)
        .subscribe((resp: UserRegistrationDTO) => {
          this.user = resp;
          this.router.navigate(['/login']);
          this.alerts.showAlertSuccess('Usuário cadastrado!!');
        });
    }
  }
}
