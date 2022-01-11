import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/model/UserModel';
import { AlertsService } from 'src/app/service/alerts.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user : UserModel = new UserModel
  idUser: number
  confirmePassword: string

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alerts: AlertsService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if (environment.token == '') {

      this.router.navigate(['/login'])
    }
    this.authService.refreshToken()
    this.idUser = this.route.snapshot.params['id']
    this.findByidUser(this.idUser)
  }

  findByidUser(id:number){
    this.authService.getByIdUser(id).subscribe((resp: UserModel)=>{
      this.user = resp
    })
  }

  confirmPassword(event: any) {
    this.confirmePassword = event.target.value;
  }

  update(){
    if(this.user.password != this.confirmePassword){
      this.alerts.showAlertDanger('As senhas estão incorretas!!')
    }else{
      this.authService.updateUser(this.user).subscribe((resp: UserModel)=>{
        this.user= resp
        this.alerts.showAlertInfo("Usuário atualizado, faça login novamente!!")
        environment.foto=''
        environment.id=0
        environment.name=''
        environment.token=''
        this.router.navigate(['/login'])
      })
    }
  }


}
