import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size-editor',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.css']
})
export class FontSizeEditorComponent implements OnInit {
  //thêm any sau fontsize
  fontSize:any = 14;
  constructor() { }

  ngOnInit() {
  }
  //Cách 1
  // changeFontSizeValue(fontSize:any){
  //   this.fontSize = fontSize;
  // }
}
