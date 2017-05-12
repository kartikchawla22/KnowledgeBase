import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateViaAuthGuard } from './authentication.service';

import { AuthenticationService } from './authentication.service';

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
import { DataexchangeService } from './dataexchange.service';
import {Configuration} from './config';
const AllRoutes = [
{ path : '', component:MainbodyComponent},
{ path : 'users', 
  component:UsersComponent,
// children:[
//    {
//      path:'addheading' ,
//      component: AddheadingComponent
//    }
// ]
 },
  {
     path:'addheading' ,
     component: AddheadingComponent,canActivate: [CanActivateViaAuthGuard]
   },
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
 }
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
 entryComponents:[],
  providers: [KnowledgebasedataService, DataexchangeService,AuthenticationService,CanActivateViaAuthGuard, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
