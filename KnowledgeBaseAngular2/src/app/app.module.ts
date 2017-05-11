import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
<<<<<<< HEAD
{path : 'users', component:UsersComponent},
{ path : '', component:MainbodyComponent},
=======
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
>>>>>>> 52d568e798ffa073a38276190ddbacadbb390ba4
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
    ReactiveFormsModule,
    RouterModule.forRoot(AllRoutes)
  ],
  providers: [KnowledgebasedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
