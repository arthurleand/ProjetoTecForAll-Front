import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { PostModel } from '../model/PostModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token )
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllPost() : Observable<PostModel[]>{
    return this.http.get<PostModel[]>('https://techforall.herokuapp.com/post', this.token)
  }

 getByIdPost(id: number): Observable<PostModel>{
   return this.http.get<PostModel>(`https://techforall.herokuapp.com/post/${id}`, this.token)
 }

 postPublish(postModel: PostModel): Observable<PostModel>{
   return this.http.post<PostModel>('https://techforall.herokuapp.com/post', postModel, this.token)
 }

 putPost(postModel: PostModel): Observable<PostModel>{
  return this.http.put<PostModel>('https://techforall.herokuapp.com/post', postModel, this.token)
}

  deletePost(id: number){
    return this.http.delete(`https://techforall.herokuapp.com/post/${id}`, this.token)
  }
}
