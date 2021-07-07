import { Component, OnInit } from '@angular/core';
import { Article } from './../defined/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article:Article | undefined;
  articles: Article[] | undefined;

  age:number = 19;

  order_status:string = 'paid';

  // class_arr:Array<string> = [

  // ];

  isBlack:boolean = false;

  class_arr:string[] = [
    'text-center','text-black','text-danger'
  ];

  constructor() { }

  ngOnInit(): void {
    this.article = {
      title : 'This is title',
      description : 'This is description'
    };
  
    this.articles = [
      {
        title : 'This is title 1',
        description : 'This is description'
      },
      {
        title : 'This is title 2',
        description : 'This is description'
      },
      {
        title : 'This is title 3',
        description : 'This is description'
      }
    ];
  }

  setClasses(){
    return {
        'text-black' : this.isBlack,
        'text-danger' : !this.isBlack
    };
  }

  setStyles(){
    return {
      'background-color' : 'red'
    }
  }

}
