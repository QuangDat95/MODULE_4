import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() progress = 0;
  constructor() { }

  ngOnInit(): void {
    this.loading();
  }

  loading(){
      let interval = setInterval(() => {
        if(this.progress == 0){
          this.progress = +this.progress + 0.1;
        }
        if(this.progress >= 100){
        let subinterval = setInterval(() => {
          this.progress = +this.progress - 0.1;
        });
        }
      },0.1); 
  }
}