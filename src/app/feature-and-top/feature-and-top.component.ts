import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {features} from '../shared/feature-news/feature-new.model'
@Component({
  selector: 'feature-and-top',
  templateUrl: './feature-and-top.component.html',
  styleUrls: ['./feature-and-top.component.css']
})
export class FeatureAndTopComponent implements OnInit {

 @Input() featuresandtopnews:features[]=[];
 
  constructor(private _httpClient:HttpClient) { }

  ngOnInit() {
   

}
  }



