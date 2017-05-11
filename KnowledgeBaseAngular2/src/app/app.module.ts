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
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
const AllRoutes = [
{ path : '', component:MainbodyComponent},
{ path : 'users', 
  component:UsersComponent
// children:[
//    {
//      path:'users' ,
//      component: UsersComponent
//    }
//  ]
 },
{ path : 'users', component:UsersComponent},
 {
   path : 'about',
   component:AboutComponent
 },
 {
   path : 'contacts',
   component:ContactsComponent
 },
 {
   path : 'terms',
   component:TermsComponent
 },
 // { path : '', component:MainbodyComponent,
//   component:UsersComponent
// }
 
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
    AddheadingComponent,
    ContactsComponent,
    AboutComponent,
    TermsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AllRoutes)
  ],
 entryComponents:[HeaderComponent],
  providers: [KnowledgebasedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
