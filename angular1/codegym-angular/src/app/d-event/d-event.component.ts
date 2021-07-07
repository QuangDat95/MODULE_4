import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-d-event',
  templateUrl: './d-event.component.html',
  styleUrls: ['./d-event.component.css']
})
export class DEventComponent {
  clickMe1():void{
    console.log('clickMe1');
  }
  clickMe2():void{
    console.log(event);
  }
  btnClick():void{
    let objEvent = event;
    console.log(objEvent);
  }
  divClick():void{
    console.log(event);
  }
  onKeyUp(event:any):void{
    console.log(event);
    if(event.which == 13){
      let tag = event.target.value;
      console.log(tag);
      $('#result-tag').append(`<span class="btn btn-success">${tag}</span>`);
      event.target.value = '';
    }
  }
}
