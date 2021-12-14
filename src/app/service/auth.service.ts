import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginDTO } from '../model/UserLoginDTO';
import { environment } from 'src/environments/environment.prod';
import { UserRegistrationDTO } from '../model/UserRegistrationDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

    login(userLoginDTO : UserLoginDTO) : Observable<UserLoginDTO>{
      return this.http.post<UserLoginDTO>('http://localhost:8080/user/login', userLoginDTO)
    }

    register(userRegistrationDTO: UserRegistrationDTO): Observable<UserRegistrationDTO>{
      return this.http.post<UserRegistrationDTO>('http://localhost:8080/user/register',userRegistrationDTO)
    }
    logado(){

      let ok: boolean = false
  
      if(environment.token != ''){
        ok = true
      }
  
      return ok
    }

}
