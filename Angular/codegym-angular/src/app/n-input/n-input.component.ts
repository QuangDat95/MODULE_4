import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-n-input',
  templateUrl: './n-input.component.html',
  styleUrls: ['./n-input.component.css']
})
export class NInputComponent implements OnInit {
  @Input('item') item:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }

}
