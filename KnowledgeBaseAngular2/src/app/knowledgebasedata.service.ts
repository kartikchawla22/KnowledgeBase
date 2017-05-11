import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class KnowledgebasedataService {
  constructor(private httpService: Http,private httpService1: Http) { 
  }
    
  getTitles(): Observable<any>{
    var a:string='http://192.168.15.148:4000/api/v1/titles';
    return this.httpService.get(a).map(
      data => data.json()
    );
  }
  
  getHeadings(): Observable<any>{
  var a:string='http://192.168.15.148:4000/api/v1/headings';
    return this.httpService.get(a).map(
      data => data.json()
    );
}
 getUsers(): Observable<any>{
  var a:string='https://api.github.com/users/v1/users';
    return this.httpService.get(a).map(
      data => data.json()
    );
}

getSearch(): Observable<any>{
  var a:string='http://192.168.15.148:4000/api/v1/search';
    return this.httpService.get(a).map(
      data => data.json()
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

