import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
    selector: 'courses',
    template: `
            <h2>{{ getTitle() }}</h2>
            <img src="{{imageUrl}}" /><br/>
            <img [src]="imageUrl" />
            <table>
                <tr>
                    <td [attr.colspan]="colSpan">hej </td>
                </tr>
            </table>
            <button class="btn btn-primary" 
                [class.active]="isActive" 
                [style.backgroundColor]="isActive ? 'blue' : 'red' "
                (click)="onSave($event)" >Save</button>
            `
})

export class CoursesComponent {
    title = "List of course";
    courses;
    imageUrl: string = "https://avatars2.githubusercontent.com/u/7382715?s=460&v=4";
    colSpan;
    isActive: boolean = false;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
        this.colSpan = 2;
    }
    getTitle(){
        return this.title;
    }
    onSave($event){
        console.log("click", $event);
    }
}