import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-class',
  templateUrl: './c-class.component.html',
  styleUrls: ['./c-class.component.css']
})
export class CClassComponent implements OnInit {

  onSale:boolean = true;
  classExpression:Array<string> = ['class-1','class-2'];
  actionName:string = 'add';
  expression:string = 'red';
  constructor() { }

  ngOnInit(): void {
  }

}
