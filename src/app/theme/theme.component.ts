import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ThemeModel } from '../model/ThemeModel';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  theme: ThemeModel =  new ThemeModel
  listTheme: ThemeModel[] 

  constructor(private router: Router, private themeService: ThemeService) {


  }

  ngOnInit(){

    if(environment.token ==''){
      this.router.navigate(['/entrar'])
    }
    this.themeService.refreshToken()



  }

}
