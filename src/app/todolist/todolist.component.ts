import { Component, OnInit } from '@angular/core';
import { title } from './title.model';

@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  title:title = new title();
  tites:title[] =[];
  
  getTitleLength():number{
return this.tites.length;
  }
 
 addTitle(newTitle:string){
 this.title.titlename=newTitle;
  //  this.tites.push(newTitle);
   
  }
  findif(newTitle:string):boolean{
    return(!this.tites.some(x =>x.titlename ==newTitle))
  }
  addCount(titlename:string){
  
  if(this.findif(titlename)){
     let   Task:title = new title();
     Task.titlename=titlename;
      this.tites.push(Task);
    
    }
    else{
      alert("sorry already exist")
    }
      
     }
    check(Taskcheck:title){
      Taskcheck.check =!Taskcheck.check

    }
    filtercheck(){
      return this.tites.filter(x=>x.check===false).length;
    }
    update(task:title){
      task.check!=task.check;
    }
    delete(index:number){
      this.tites.splice(index,1)
      
    }
  
  
}
