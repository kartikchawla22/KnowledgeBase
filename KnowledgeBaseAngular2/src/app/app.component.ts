import { Component,ViewContainerRef,ComponentFactoryResolver,OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
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
}
