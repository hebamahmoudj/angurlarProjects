import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { topnews } from './top-news.model';

@Component({
  selector: 'top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {
top:topnews[];
  constructor(private _httpClient:HttpClient) { }

  ngOnInit() {
    this._httpClient.get("http://api.mohamed-sadek.com/News/TopNews")
    .subscribe(response=>{this.top=response as topnews[];
    
    },
    
    (error)=>{ console.log(error);})
   
  }

}
