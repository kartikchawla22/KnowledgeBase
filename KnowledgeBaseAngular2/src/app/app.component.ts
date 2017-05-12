
import { Component, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
// This will Show and Hide the header, mainbody and search while moving on to the next or previous page. 
  ShowHeader = true;      
  ShowMainBody = true;
  ShowSearch = true;
  constructor(private router: Router, private _route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        var path = event.url;
        if (path === "/users") {
          this.ShowHeader = false;
          this.ShowMainBody = false;
          this.ShowSearch = false;
        }
        else if (path === "/") {
          this.ShowHeader = true;
          this.ShowMainBody = true;
          this.ShowSearch = true;
        }
      }
    });
  }
}
