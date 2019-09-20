import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  HttpService,
  ArticleService,
  CategoryService,
  LoginService,
  UserService,
  CrafterService,
  ErrorService,
  ThemeService
  } from './services.index';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    HttpService,
    ArticleService,
    CategoryService,
    LoginService,
    UserService,
    CrafterService,
    ErrorService,
    ThemeService
  ]
})

export class ServicesModule { }
