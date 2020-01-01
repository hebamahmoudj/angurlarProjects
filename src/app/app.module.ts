import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { studentcomponent } from './student/student.component';

import { TodolistComponent } from './todolist/todolist.component';
import {FormsModule}  from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { NewsComponent } from './shared/navbarnews/navbarnews.component'
import { HttpClientModule } from '@angular/common/http';
import { FeatureNewsComponent } from './shared/feature-news/feature-news.component';
import { TopNewsComponent } from './shared/top-news/top-news.component';
import { ShownewsComponent } from './shownews/shownews.component';
import { LeftSideNewsComponent } from './left-side-news/left-side-news.component';
import { RightHandSideComponent } from './right-hand-side/right-hand-side.component';
import { FeatureAndTopComponent } from './feature-and-top/feature-and-top.component';
import { NavbarsharedComponent } from './navbarshared/navbarshared.component';


@NgModule({
  declarations: [
    AppComponent,studentcomponent, TodolistComponent, TodoComponent, NewsComponent, FeatureNewsComponent, TopNewsComponent, ShownewsComponent, LeftSideNewsComponent, RightHandSideComponent, FeatureAndTopComponent, NavbarsharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
