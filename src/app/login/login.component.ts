import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLoginDTO } from '../model/UserLoginDTO';
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
    private router: Router
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

      console.log(environment.token);

    }, erro=>{
      if(erro.status == 500){
        alert('Usuário ou senha incorretos')
      }
    })
  }

}
