import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  showHeader = true;

  constructor(private router: Router, private _route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
        console.log(this._route.url);
      }
    });
  }
}
