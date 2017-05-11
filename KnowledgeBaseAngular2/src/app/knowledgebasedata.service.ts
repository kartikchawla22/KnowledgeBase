import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class KnowledgebasedataService {
public name1:string="";
  constructor(private httpService: Http,private httpService1: Http) { 
  }
    
  getdetails(): Observable<any>{
    console.log(this.name1);
    var a:string='https://api.github.com/users/';
    var b:string=this.name1.trim();
    a=a+b;
    //a.replace('%20', "");
    console.log(a);
    return this.httpService.get(a).map(
      data => data.json()
    );
  }
  setuser(dat)
  {
     this.name1=dat;
  }
  getprodat(name_pro):Observable<any>
  {
   
    var a:string='https://api.github.com/search/repositories?q=';
    var b:string=name_pro.trim();
    a=a+b;
    return this.httpService1.get(a).map(
      data1 => data1.json()
    );
  }
     private handleError(error: any) {

        if (error.status === 401) {
            return Observable.throw(error.status);
        } else {
            return Observable.throw(error.status || 'Server error');
        }
    }

}

