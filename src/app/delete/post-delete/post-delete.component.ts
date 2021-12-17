import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostModel } from 'src/app/model/PostModel';
import { AlertsService } from 'src/app/service/alerts.service';
import { PostService } from 'src/app/service/post.service';
import { ThemeService } from 'src/app/service/theme.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css']
})
export class PostDeleteComponent implements OnInit {

  postModel: PostModel = new PostModel()
  idPost: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    private alerts: AlertsService

  ) { }

  ngOnInit(){

    if (environment.token == '') {
      alert('Seção expirada, faça o login novamente!')
      this.router.navigate(['/login'])
    }

    this.idPost = this.route.snapshot.params['id']
    this.findByIdPost(this.idPost)

  }

  findByIdPost(id: number){
    this.postService.getByIdPost(id).subscribe((resp: PostModel) => {
      this.postModel = resp
    })
  }

  delete(){
    this.postService.deletePost(this.idPost).subscribe(() => {
      this.alerts.showAlertSuccess('Postagem apagada com sucesso!')
      this.router.navigate(['/feed'])
    })
  }

}
