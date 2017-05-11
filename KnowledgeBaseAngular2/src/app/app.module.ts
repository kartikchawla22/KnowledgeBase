import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { UsersComponent } from './users/users.component';
import { AddheadingComponent } from './addheading/addheading.component';
import {  KnowledgebasedataService } from './knowledgebasedata.service';
const AllRoutes = [
{ path : 'users', 
  component:UsersComponent
// children:[
//    {
//      path:'users' ,
//      component: UsersComponent
//    }
//  ]
 },
{ path : '', component:MainbodyComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MainbodyComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    UsersComponent,
    AddheadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AllRoutes)
  ],
  providers: [KnowledgebasedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
