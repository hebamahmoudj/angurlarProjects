import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShownewsComponent } from './shownews/shownews.component';
import { LeftSideNewsComponent } from './left-side-news/left-side-news.component';
import {RightHandSideComponent } from './right-hand-side/right-hand-side.component'
const routes: Routes = [
  {path:"News/Department/:id",component:ShownewsComponent},
  {path:"News/item/:id",component:LeftSideNewsComponent},
  {path:"News/item/:id",component:RightHandSideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
