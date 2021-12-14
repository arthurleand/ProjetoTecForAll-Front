import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeModel } from 'src/app/model/ThemeModel';
import { ThemeService } from 'src/app/service/theme.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-theme-edit',
  templateUrl: './theme-edit.component.html',
  styleUrls: ['./theme-edit.component.css']
})
export class ThemeEditComponent implements OnInit {
  theme: ThemeModel = new ThemeModel

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    if (environment.token == '') {
      alert('Seção expirada, faça o login novamente!')
      this.router.navigate(['/login'])

    }
    let id = this.route.snapshot.params['id']
    this.findByIdTheme(id)
  }
  findByIdTheme(id: number) {
    this.themeService.getByIdTheme(id).subscribe((resp: ThemeModel) => {
      this.theme = resp
    })

  }
  update() {
    this.themeService.putTheme(this.theme).subscribe((resp: ThemeModel) => {
      this.theme = resp
      alert('Tema Atualizado!')
      this.router.navigate(['/theme'])
    })
  }
}
