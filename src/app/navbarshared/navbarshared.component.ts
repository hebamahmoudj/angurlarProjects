import { Component, OnInit, Input } from '@angular/core';
import {news} from '../shared/navbarnews/navbarnews.model'

@Component({
  selector: 'navbarshared',
  templateUrl: './navbarshared.component.html',
  styleUrls: ['./navbarshared.component.css']
})
export class NavbarsharedComponent implements OnInit {

 @Input() navnews:news[]=[];
  constructor() { }

  ngOnInit() {
  }

}
