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

  theme: ThemeModel = new ThemeModel
  listTheme: ThemeModel[]

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }
    this.themeService.refreshToken()
    this.findAllTheme()
  }
  register() {
    this.themeService.postTheme(this.theme).subscribe((resp: ThemeModel) => {
      this.theme = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllTheme()
      this.theme = new ThemeModel()
    })
  }
  findAllTheme() {
    this.themeService.getAllTheme().subscribe((resp: ThemeModel[]) => {
      this.listTheme = resp
    })
  }

}
