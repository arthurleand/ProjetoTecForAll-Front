import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginDTO } from '../model/UserLoginDTO';
import { UserRegistrationDTO } from '../model/UserRegistrationDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

    login(userLoginDTO : UserLoginDTO) : Observable<UserLoginDTO>{
      return this.http.post<UserLoginDTO>('http://localhost:8080/usuarios/login', userLoginDTO)
    }

    register(userRegistrationDTO: UserRegistrationDTO): Observable<UserRegistrationDTO>{
      return this.http.post<UserRegistrationDTO>('http://localhost:8080/usuarios/register',userRegistrationDTO)
    }

}
