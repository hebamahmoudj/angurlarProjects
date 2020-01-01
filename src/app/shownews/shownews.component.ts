import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import {departmentnews} from '../shownews/shownews.model';
import {HttpClient} from '@angular/common/http';
import {departmentnews } from './shownews.model'


@Component({
  selector: 'shownews',
  templateUrl: './shownews.component.html',
  styleUrls: ['./shownews.component.css']
})
export class ShownewsComponent implements OnInit {

  constructor(private _httpClient:HttpClient, private _activatedRoute:ActivatedRoute) { }
 newsdeparment:departmentnews[];
 newsdept:departmentnews= new departmentnews();
  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(params=>{
      
     this.newsdept.ID=+params.get('id'); 
     this._httpClient.get(`http://api.mohamed-sadek.com/News/Department/${this.newsdept.ID}`)
     
     .subscribe(response=>{this.newsdeparment=response as departmentnews[];
      console.log(this.newsdeparment)
    },
    err=>{console.log(err);});
 

  }
    )
}
}
