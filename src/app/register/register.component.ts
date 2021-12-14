import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationDTO } from '../model/UserRegistrationDTO';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userRegistrationDTO: UserRegistrationDTO = new UserRegistrationDTO();
  confirmePassword: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  confirmPassword(event: any) {
    this.confirmePassword = event.target.value;
  }

  register() {
    if (this.userRegistrationDTO.password != this.confirmePassword) {
      alert('As senhas estão diferentes');
    } else {
      this.authService
        .register(this.userRegistrationDTO)
        .subscribe((resp: UserRegistrationDTO) => {
          this.userRegistrationDTO = resp;
          this.router.navigate(['/login']);
          alert('Usuário cadastrado!!');
        });
    }
  }
}
