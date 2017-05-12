import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import  { Configuration } from './config';
@Injectable()
export class KnowledgebasedataService {
  constructor(private httpService: Http, public UrlObject : Configuration) { 
  }
    
  GetTitles(): Observable<any>{
    
    return this.httpService.get(this.UrlObject.UrlObj.TitlesUrl).map(
      data => data.json()
    );
  }
  
  GetHeadings(): Observable<any>{
  
    return this.httpService.get(this.UrlObject.UrlObj.HeadingUrl).map(
      data => data.json()
    );
}


 GetUsers(): Observable<any>{
 
    return this.httpService.get(this.UrlObject.UrlObj.UsersUr).map(
      data => data.json()
    );
}

// GetSearch(): Observable<any>{
  
//     return this.httpService.get(a).map(
//       data => data.json()
//     );
// }
PostHeadings(Form){
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    console.log(Form);
    
    return this.httpService.post(this.UrlObject.UrlObj.UsersUr, Form, headers).map((res: Response) => res.json());
  
}

     private handleError(error: any) {

        if (error.status === 401) {
            return Observable.throw(error.status);
        } else {
            return Observable.throw(error.status || 'Server error');
        }
    }

}

