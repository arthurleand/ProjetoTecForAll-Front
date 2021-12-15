import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginDTO } from '../model/UserLoginDTO';
import { environment } from 'src/environments/environment.prod';
import { UserRegistrationDTO } from '../model/UserRegistrationDTO';
import { UserModel } from '../model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token={
    headers: new HttpHeaders().set('Authorization',environment.token)
  }
  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

    login(userLoginDTO : UserLoginDTO) : Observable<UserLoginDTO>{
      return this.http.post<UserLoginDTO>('http://localhost:8080/user/login', userLoginDTO)
    }

    register(userRegistrationDTO: UserRegistrationDTO): Observable<UserRegistrationDTO>{
      return this.http.post<UserRegistrationDTO>('http://localhost:8080/user/register',userRegistrationDTO)
    }

    getByIdUser(id: number): Observable<UserModel>{
      return this.http.get<UserModel>(`http://localhost:8080/user/${id}`, this.token)
    }

    updateUser(user: UserModel): Observable<UserModel>{
      return this.http.put<UserModel>('http://localhost:8080/user/update', this.token)
    }

    logado(){

      let ok: boolean = false

      if(environment.token != ''){
        ok = true
      }

      return ok
    }

}
