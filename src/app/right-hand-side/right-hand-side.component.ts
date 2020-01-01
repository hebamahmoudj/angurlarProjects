import { Component, OnInit } from '@angular/core';
import {rightsidenews} from './righthandside.model';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-right-hand-side',
  templateUrl: './right-hand-side.component.html',
  styleUrls: ['./right-hand-side.component.css']
})
export class RightHandSideComponent implements OnInit {

  constructor(private _httpClient:HttpClient, private _activatedRout:ActivatedRoute) { }
  rightnews:rightsidenews[];
   newsright:rightsidenews= new rightsidenews();
    ngOnInit() {
      this._activatedRout.paramMap.subscribe(params=>{
        
       this.newsright.ID = +params.get('id'); 
       this._httpClient.get(`http://api.mohamed-sadek.com/News/item/${this.newsright.ID}`)
       
       .subscribe(response=>{this.rightnews = response as rightsidenews[];
        console.log(this.rightnews)
      },
      err=>{console.log(err);}); 
   
  
    }
      )
  }
  }
  