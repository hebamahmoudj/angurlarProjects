import { Component } from '@angular/core';
import { student } from './student.model';

@Component({
    selector:'student',
    template :'hello from student component',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css'],
    // imageURL:'./NN'
})
export class studentcomponent
{
    student:student= new  student();
    students:student[]=[];

    getFullName():string{
        return this.  student.firstName +" "+ this.  student.lastName;

    }
changeFirstName(newFirstName:string){
    this.  student.firstName = newFirstName;

}
delete(index:number){
    
}
}