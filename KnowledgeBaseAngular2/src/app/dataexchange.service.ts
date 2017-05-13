import { Injectable } from '@angular/core';

@Injectable()
export class DataexchangeService {

  constructor() { }
  DataObj;
  Titles;
  id;
  SendData(Obj) {
    console.log(Obj);
    this.DataObj = Obj;
    console.log(this.DataObj);
  }
  GetData() {
    console.log(this.DataObj);
    return this.DataObj;
  }


  SendTitles(Obj) {
    console.log(Obj);
    this.Titles = Obj;
    console.log(this.Titles);
  }
  GetTitles() {
    console.log(this.Titles);
    return this.Titles;
  }

}
