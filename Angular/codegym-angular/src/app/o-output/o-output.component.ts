import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-o-output',
  templateUrl: './o-output.component.html',
  styleUrls: ['./o-output.component.css']
})
export class OOutputComponent implements OnInit {
  //nhận vào output answerRequest
  @Output() answerRequest = new EventEmitter<any>();
  constructor() {

  }
  ngOnInit(): void {
    this.answerRequest.emit('ngOnInit');
  }
  //xử lý sự kiện click
  onClick(value:any){
    console.log('OOutputComponent::onclick: ' + value);
    //đẩy ngược ra answerRequest => appComponentAnswer
    this.answerRequest.emit(value);
  }
}
