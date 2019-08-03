import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error404Component } from './shared/components/error404/error404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module')
      .then(mod => mod.HomeModule),
    data: {name: 'Home'}
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module')
      .then(mod => mod.CategoriesModule),
    data: {name: 'Categories'}
  },
  {
    path: 'category/:category',
    loadChildren: () => import('./pages/single-category/single-category.module')
      .then(mod => mod.SingleCategoryModule),
    data: {name: 'Category'}
  },
  {
    path: 'article/:slug',
    loadChildren: () => import('./pages/single-article/single-article.module')
      .then(mod => mod.SingleArticleModule),
    data: {name: 'Article'}
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
