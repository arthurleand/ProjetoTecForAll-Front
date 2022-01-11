import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { PostModel } from '../model/PostModel';
import { ThemeModel } from '../model/ThemeModel';
import { UserModel } from '../model/UserModel';
import { AlertsService } from '../service/alerts.service';
import { AuthService } from '../service/auth.service';
import { PostService } from '../service/post.service';
import { ThemeService } from '../service/theme.service';

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
  idPost: number

  themeModel: ThemeModel = new ThemeModel()
  listTheme: ThemeModel[]
  idTheme: number

  key = 'date'
  reverse = true

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private themeService: ThemeService,
    private postService: PostService,
    private alerts: AlertsService

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
    this.findAllTheme()

    this.getAllPosts()

  }

  findByIdUser() {
    this.auth.getByIdUser(this.idUser).subscribe((resp: UserModel) => {
      this.user = resp
      this.listPost = resp.post
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
  findByIdPost(id: number){
    this.idPost= id
    this.postService.getByIdPost(id).subscribe((resp:PostModel)=>{
      this.postModel = resp
    })
  }
  findByIdTheme(){
    this.themeService.getByIdTheme(this.idTheme).subscribe((resp:ThemeModel)=>{
      this.themeModel = resp
    })
  }
  findAllTheme(){
    this.themeService.getAllTheme().subscribe((resp : ThemeModel[])=>{
      this.listTheme = resp
    })
  }

  getAllPosts(){
    this.postService.getAllPost().subscribe((resp: PostModel[]) =>{
      this.listPost = resp
    })
  }

  update(){
    this.themeModel.idTheme = this.idTheme
    this.postModel.fkTheme = this.themeModel

    this.user.id = environment.id
    this.postModel.fkUser = this.user

    this.postService.putPost(this.postModel).subscribe((resp : PostModel)=>{
      this.postModel=resp
      this.alerts.showAlertSuccess("Postagem atualizada com sucesso!")
      this.router.navigate(['/feed'])
    })
  }
  delete(){
    this.postService.deletePost(this.idPost).subscribe(() => {
      this.alerts.showAlertSuccess('Postagem apagada com sucesso!')
      this.router.navigate(['/feed'])
    })
  }

}

