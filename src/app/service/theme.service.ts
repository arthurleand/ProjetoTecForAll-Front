import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ThemeModel } from '../model/ThemeModel';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {


  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token )
  }
  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllTheme(): Observable<ThemeModel[]>{
    return this.http.get<ThemeModel[]>('http://localhost:8080/theme', this.token)
  }

  getByIdTheme(id: number): Observable<ThemeModel>{
    return this.http.get<ThemeModel>(`http://localhost:8080/theme/${id}`, this.token)

  }

  postTheme(theme: ThemeModel): Observable<ThemeModel>{
    return this.http.post<ThemeModel>('http://localhost:8080/theme', theme ,this.token)

  }
  putTheme(theme: ThemeModel): Observable<ThemeModel> {
    return this.http.put<ThemeModel>('http://localhost:8080/theme', theme, this.token)
  }

  deleteTheme(id: number){
    return this.http.delete(`http://localhost:8080/theme/${id}`,this.token)
  }

}
