import { Component, OnInit } from '@angular/core';
import { news } from './navbarnews.model';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'news',
  templateUrl: './navbarnews.component.html',
  styleUrls: ['./navbarnews.component.css']
})
export class NewsComponent implements OnInit {
newsdata:news[];
  constructor(private _httpClient:HttpClient) { }

  ngOnInit() {
    this._httpClient.get("http://api.mohamed-sadek.com/News/Departments")
    // this._httpClient.get("http://localhost:65410/api/Employees")
    .subscribe(response=>{this.newsdata=response as news[];
      this.newsdata=this.newsdata.filter(x=>x.ShowInMainMenu==true)
      
    },
    (error)=>{ console.log(error);})
    
    

  }

}
