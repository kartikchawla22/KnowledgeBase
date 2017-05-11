<<<<<<< HEAD
import { Component,ViewContainerRef,ComponentFactoryResolver,OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
=======
import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";

>>>>>>> d75b0b53428866ff2efe87b042630cdc095e829d
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
<<<<<<< HEAD
  constructor(public view:ViewContainerRef,public dync:ComponentFactoryResolver) {
    
   }
 addComponent() {
       const factory = this.dync.resolveComponentFactory(HeaderComponent);
       const ref = this.view.createComponent(factory,0);
       ref.changeDetectorRef.detectChanges();
       console.log('da');
   }

  ngOnInit() {
    this.remove();
    this.addComponent();
  }
   remove(){
     this.view.remove(0);      
   }
=======
  showHeader = true;

  constructor(private router: Router, private _route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
        console.log(this._route.url);
        // this._route.url.value["0"].path = 
      }
    });
  }
>>>>>>> d75b0b53428866ff2efe87b042630cdc095e829d
}
