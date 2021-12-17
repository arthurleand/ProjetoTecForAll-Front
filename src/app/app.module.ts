import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { StartComponent } from './start/start.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ThemeComponent } from './theme/theme.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ThemeEditComponent } from './edit/theme-edit/theme-edit.component';
import { ThemeDeleteComponent } from './delete/theme-delete/theme-delete.component';
import { FeedComponent } from './feed/feed.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { PostEditComponent } from './edit/post-edit/post-edit.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PostDeleteComponent } from './delete/post-delete/post-delete.component';
import { AlertsComponent } from './alerts/alerts.component';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    UsermenuComponent,
    StartComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    ThemeComponent,
    ThemeEditComponent,
    ThemeDeleteComponent,
    FeedComponent,
    UserEditComponent,
    PostEditComponent,
    PostDeleteComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    ModalModule.forRoot()
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
