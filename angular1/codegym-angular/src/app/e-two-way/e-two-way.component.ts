import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-two-way',
  templateUrl: './e-two-way.component.html',
  styleUrls: ['./e-two-way.component.css']
})
export class ETwoWayComponent implements OnInit {
  firstName:string = 'Angular';
  constructor() { }

  ngOnInit(): void {
  }

}
