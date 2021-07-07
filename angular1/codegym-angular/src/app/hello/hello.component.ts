import { Component } from '@angular/core';
@Component({
    selector: 'app-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css']
  })
export class HelloComponent{
    a:string = "Chào Nguyễn Quang Đạt!";
    b:number = 27;
}