import { Injectable } from '@angular/core';

@Injectable()
export class DataexchangeService {

  constructor() { }
  DataObj : Object;
  SendData(Obj){
    this.DataObj = Obj;

  }
  GetData(){
return this.DataObj;
  }

}
