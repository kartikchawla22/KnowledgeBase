import { Component,ViewContainerRef,ComponentFactoryResolver,OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  ShowHeader = true;
  ShowSearch = true;
  ShowMainBody = true;
ShowUsers = false;
  constructor(private router: Router, private _route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        var path = event.url;
        if (path === "/users") {
          this.ShowHeader = false;
          this.ShowSearch = false;
          this.ShowMainBody = false;
          this.ShowUsers = true;
        }
      }
    });
    
   }
 

  ngOnInit() {
    
  }
         
   }


