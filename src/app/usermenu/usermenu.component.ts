import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.css']
})
export class UsermenuComponent implements OnInit {

  name= environment.name
  foto= environment.foto
  id= environment.id
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
