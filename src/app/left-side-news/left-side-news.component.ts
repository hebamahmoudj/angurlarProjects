import { Component, OnInit } from '@angular/core';
import {leftsidenews} from './leftsidenews.model';
// import { ActivatedRoute } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'left-side-news',
  templateUrl: './left-side-news.component.html',
  styleUrls: ['./left-side-news.component.css']
})
export class LeftSideNewsComponent implements OnInit {
constructor(private _httpClient:HttpClient, private _activatedRout:ActivatedRoute) { }
leftnews:leftsidenews[];
 newsleft:leftsidenews= new leftsidenews();
  ngOnInit() {
    this._activatedRout.paramMap.subscribe(params=>{
      
     this.newsleft.ID = +params.get('id'); 
     this._httpClient.get(`http://api.mohamed-sadek.com/News/item/${this.newsleft.ID}`)
     
     .subscribe(response=>{this.leftnews = response as leftsidenews[];
      console.log(this.leftnews)
    },
    err=>{console.log(err);}); 
 

  }
    )
}
}
