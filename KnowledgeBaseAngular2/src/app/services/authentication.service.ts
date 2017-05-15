import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { KnowledgebasedataService } from './services/knowledgebasedata.service';

// class FlowGuard implements CanActivate {
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

//     return false;
//   }
// }

@Injectable()
export class AuthenticationService {

  UserLogin: {
    username: string,
    password: string
  }
  constructor(public router1: Router, public auth: KnowledgebasedataService) { }
  set(UserObj) {
    this.UserLogin = UserObj;
    console.log(this.UserLogin);
    this.router1.navigate(['./addheading']);
  }


  // login(){
  // // this.auth.Postlogin(this.UserLogin);

  // }
}

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
  UserLogin: {
    username: string,
    password: string
  }
  constructor() { }
  canActivate() {

    if (this.UserLogin) {
      // alert("true");
      return true;
    }

    // else{
    //   alert("false");
    //   return false;
    // } 
    else {
      // alert("false");
      return false;
    }

  }
} 