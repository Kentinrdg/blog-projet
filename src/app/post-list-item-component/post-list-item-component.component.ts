import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

	  numberClick: number = 0;

  constructor() { }

  ngOnInit() {
  }

  addLike(){
  this.numberClick	= this.numberClick + 1;
  	console.log("Like !");

  }

  dislike(){
  	  this.numberClick	= this.numberClick - 1;
  	console.log("dislike !");
  }

}
