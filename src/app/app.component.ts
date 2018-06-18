import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon blog';


  posts = [
    {
      title: "Mon post 1",
      content: "BlaBlaCar, est une plateforme communautaire payante de covoiturage proposé par la société Comuto. Avec 20 millions d'utilisateurs en 2015, BlaBlaCar est leader ",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Mon post 2",
      content: "BlaBlaCar, est une plateforme communautaire payante de covoiturage proposé par la société Comuto. Avec 20 millions d'utilisateurs en 2015, BlaBlaCar est leader ",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Mon post 3",
      content: "BlaBlaCar, est une plateforme communautaire payante de covoiturage proposé par la société Comuto. Avec 20 millions d'utilisateurs en 2015, BlaBlaCar est leader ",
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
