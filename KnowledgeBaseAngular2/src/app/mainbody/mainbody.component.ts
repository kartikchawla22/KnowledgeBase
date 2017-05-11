import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef  } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css'],
  entryComponents : [SearchComponent]
})
export class MainbodyComponent implements OnInit {

  constructor( public componentFactoryResolver: ComponentFactoryResolver, public viewContainerRef: ViewContainerRef) { }
AddComponentHeader() {
   
   }
  //  AddComponentSearch() {
  //      const factory = this.componentFactoryResolver.resolveComponentFactory(SearchComponent);
  //      const ref = this.viewContainerRef.createComponent(factory,0);
  //      ref.changeDetectorRef.detectChanges();
  //  }
  ngOnInit() {
  // this.AddComponentSearch();
  //     const factory = this.componentFactoryResolver.resolveComponentFactory(HeaderComponent);
  //      const ref = this.viewContainerRef.createComponent(factory,0);
  //      ref.changeDetectorRef.detectChanges();
  //      console.log("hi");
  // this.AddComponentHeader();
  }
}
