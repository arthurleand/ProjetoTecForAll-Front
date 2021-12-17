import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ThemeModel } from '../model/ThemeModel';
import { AlertsService } from '../service/alerts.service';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  theme: ThemeModel = new ThemeModel()
  listTheme: ThemeModel[]

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private alerts: AlertsService
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      this.router.navigate(['/login'])
    }
    this.themeService.refreshToken()
    this.findAllTheme()
  }
  register() {
    this.themeService.postTheme(this.theme).subscribe((resp: ThemeModel) => {
      this.theme = resp
      this.alerts.showAlertSuccess('Tema cadastrado com sucesso!')
      this.router.navigate(['/feed'])
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
