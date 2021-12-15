import { PostEditComponent } from './edit/post-edit/post-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ThemeDeleteComponent } from './delete/theme-delete/theme-delete.component';
import { ThemeEditComponent } from './edit/theme-edit/theme-edit.component';
import { FeedComponent } from './feed/feed.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StartComponent } from './start/start.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: StartComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'theme', component: ThemeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'theme-edit/:id', component: ThemeEditComponent},
  {path: 'theme-delete/:id', component: ThemeDeleteComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'user-edit/:id', component: UserEditComponent},
  {path: 'post-edit/:id', component: PostEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
