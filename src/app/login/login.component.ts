import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLoginDTO } from '../model/UserLoginDTO';
import { AlertsService } from '../service/alerts.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginDTO: UserLoginDTO = new UserLoginDTO

  constructor(
    private auth: AuthService,
    private router: Router,
    private alerts: AlertsService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }
  login(){
    this.auth.login(this.userLoginDTO).subscribe((resp: UserLoginDTO)=>{
      this.userLoginDTO = resp

      environment.token = this.userLoginDTO.token
      environment.name = this.userLoginDTO.name
      environment.foto = this.userLoginDTO.foto
      environment.id = this.userLoginDTO.id

      this.router.navigate(['/feed'])

    }, erro=>{
      if(erro.status == 500){
        this.alerts.showAlertDanger('Usuário ou senha incorretos')
      }
    })
  }

}
