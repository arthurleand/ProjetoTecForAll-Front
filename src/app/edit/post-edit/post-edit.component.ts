import { UserModel } from './../../model/UserModel';
import { environment } from './../../../environments/environment.prod';
import { PostService } from './../../service/post.service';
import { ThemeService } from './../../service/theme.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ThemeModel } from './../../model/ThemeModel';
import { PostModel } from './../../model/PostModel';
import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'src/app/service/alerts.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  postModel:PostModel = new PostModel()

  themeModel: ThemeModel = new ThemeModel()
  listTheme: ThemeModel[]
  idTheme: number

  userModel: UserModel = new UserModel()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    private themeService: ThemeService,
    private alerts: AlertsService

  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if (environment.token == '') {
      this.router.navigate(['/login'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdPost(id)
    this.findAllTheme()
  }

  findByIdPost(id: number){
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
  update(){
    this.themeModel.idTheme = this.idTheme
    this.postModel.fkTheme = this.themeModel

    this.userModel.id = environment.id
    this.postModel.fkUser = this.userModel

      console.log(this.postModel)
    this.postService.putPost(this.postModel).subscribe((resp : PostModel)=>{
      this.postModel=resp
      this.alerts.showAlertSuccess("Postagem atualizada com sucesso!")
      this.router.navigate(['/feed'])
    })
  }



}
