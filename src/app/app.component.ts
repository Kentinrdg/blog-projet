import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon blog';
  @Input() titlePost: string;
  @Input() contentPost: string;

  comments=[
  	{
  	date: new Date(), 
    title:"My Title", 
    comments:"MyComment"
  	},
  ];

  post={date: null, title:"", comments:""};

    lastUpdate = new Promise((resolve, reject) => {

  	const date = new Date();
  	setTimeout(
  		() => {
  			resolve(date);
  	}, 2000
  	);
});

		onAddPost(){
      this.post.date = new Date();
			this.comments.push(this.post);
		}
}
