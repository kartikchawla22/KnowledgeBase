import { Injectable } from '@angular/core';
import { CanActivate ,Router} from '@angular/router';
import {ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class AuthenticationService {
  static username:string;
  static password:string;
  constructor(public router1:Router) { }
  set(username,password)
  {
     AuthenticationService.username=username;
     AuthenticationService.password=password;
     console.log(AuthenticationService.username);
      this.router1.navigate(['./addheading']);
  }

}

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor() {}
  canActivate() {
      
    if( AuthenticationService.password=="divya"&& AuthenticationService.username=="divya")
    {
      alert("true");
      return true;
    }
    else{
      alert("false");
      return false;
    } 
    
  }
} 