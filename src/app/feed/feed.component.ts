import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { PostModel } from '../model/PostModel';
import { ThemeModel } from '../model/ThemeModel';
import { UserModel } from '../model/UserModel';
import { AlertsService } from '../service/alerts.service';
import { AuthService } from '../service/auth.service';
import { PostService } from '../service/post.service';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {


  postModel: PostModel = new PostModel()
  listPost: PostModel[]

  themeModel: ThemeModel = new ThemeModel()
  listTheme: ThemeModel[]
  idTheme: number

  userModel: UserModel = new UserModel()
  idUser = environment.id

  key = 'date'
  reverse = true

  constructor(
    private router: Router,
    private postService: PostService,
    private themeService: ThemeService,
    private authService: AuthService,
    private alerts: AlertsService

    ) { }



  ngOnInit() {
    window.scroll(0,0)
    if (environment.token == '') {
      this.router.navigate(['/login'])
    }
    this.authService.refreshToken()
    this.themeService.refreshToken()
    this.postService.refreshToken()

    this.getAllThemes()
    this.getAllPosts()
  }

  getAllThemes(){
    this.themeService.getAllTheme().subscribe((resp: ThemeModel[]) =>{
      this.listTheme = resp
    })
  }

  findByIdThemes(){
    this.themeService.getByIdTheme(this.idTheme).subscribe((resp: ThemeModel) =>{
      this.themeModel = resp
    } )
  }



  getAllPosts(){
    this.postService.getAllPost().subscribe((resp: PostModel[]) =>{
      this.listPost = resp
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: UserModel) =>{
      this.userModel = resp
    })
  }

  publish(){
    this.themeModel.idTheme = this.idTheme
    this.postModel.fkTheme = this.themeModel

    this.userModel.id = this.idUser
    this.postModel.fkUser = this.userModel

    this.postService.postPublish(this.postModel).subscribe((resp: PostModel) => {
      this.postModel = resp
      this.alerts.showAlertSuccess('Postagem realizada com sucesso!!')
      this.postModel = new PostModel()
      this.getAllPosts()
    })
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
