import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './helpers/fake.backend';
import { ArchiveComponent } from './archive/archive.component';
import { PostService } from './services/post.service';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { HttpModule, BaseRequestOptions } from "@angular/http";

import { AppComponent } from './app.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

import { GithubFollowersService } from './services/github-followers.service';
import { AppErrorHandler } from './common/app-error-handler';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    GithubFollowersComponent,
    NotFoundComponent,
    HomeComponent,
    NavbarComponent,
    GithubProfileComponent,
    PostsComponent,
    ArchiveComponent,
    AdminComponent,
    LoginComponent,
    NoAccessComponent,
    LogoutComponent,
    SignupComponent
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'admin', component: AdminComponent},
      { path: 'login', component: LoginComponent},
      { path: 'no-access', component: NoAccessComponent},
      { path: 'followers/:userid/:username', component: GithubProfileComponent },
      { path: 'followers', component: GithubFollowersComponent },
      { path: 'posts', component:  PostsComponent},
      { path: 'archive/:year/:month', component: ArchiveComponent},
      { path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [
    DataService,
    GithubFollowersService,
    PostService,
    AuthService,
    AuthGuardService,
    {provide: ErrorHandler, useClass: AppErrorHandler},

    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
