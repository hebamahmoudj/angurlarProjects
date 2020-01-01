import { Component, OnInit } from '@angular/core';
import { features } from './feature-new.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'feature-news',
  templateUrl: './feature-news.component.html',
  styleUrls: ['./feature-news.component.css']

})
export class FeatureNewsComponent implements OnInit {
featurenews:features[];
  constructor(private _httpClient:HttpClient) { }

  ngOnInit() {
    this._httpClient.get("http://api.mohamed-sadek.com/News/FeaturedNews")
    .subscribe(response=>{this.featurenews=response as features[];
    
    },
    
    (error)=>{ console.log(error);})
  
    

  }
  }


