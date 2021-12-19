import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { PostModel } from '../model/PostModel';
import { ThemeModel } from '../model/ThemeModel';
import { UserModel } from '../model/UserModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user: UserModel = new UserModel()
  idUser: number

  
  postModel: PostModel = new PostModel()
  listPost: PostModel[]

  themeModel: ThemeModel = new ThemeModel()
  listTheme: ThemeModel[]
  idTheme: number

  key = 'date'
  reverse = true

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService

  ) { }

  ngOnInit(){
    window.scroll(0,0)
    
    if(environment.token == '') {
      //alert('Sua seção expirou, faça o login novamente.')
      this.router.navigate(['/login'])
    }

    this.auth.refreshToken()

    this.idUser = this.route.snapshot.params['id']

    this.findByIdUser()

  }

  findByIdUser() {
    this.auth.getByIdUser(this.idUser).subscribe((resp: UserModel) => {
      this.user = resp
      this.listPost = resp.post
      console.log(this.listPost)
    }) 
  }

  isUserlogin(){
    return this.idUser == environment.id? true : false
  }

  isHaveArchive(archive: string) {
    if(archive == null){
      return false
    } else {
      return true
    }
  }

  isHavePicture(picture: string) {
    if(picture == null){
      return false
    } else {
      return true
    }
  }

}

