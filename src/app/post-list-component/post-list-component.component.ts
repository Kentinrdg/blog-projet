import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']

})
export class PostListComponentComponent implements OnInit {

  title: string = "Hello";

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIt: number;
  @Input() postDate: Date;

  constructor() {

   }

  ngOnInit() {
  }

lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
}
