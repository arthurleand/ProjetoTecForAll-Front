import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent implements OnInit {

  name= environment.name
  foto= environment.foto
  id= environment.id
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  exit(){
    this.router.navigate(['/login'])
    environment.token=''
    environment.name=''
    environment.id=0
    environment.foto=''
  }

}
