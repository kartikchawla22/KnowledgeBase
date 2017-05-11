import { Component, OnInit } from '@angular/core';
import { DataexchangeService } from '../dataexchange.service';
import {  KnowledgebasedataService } from '../knowledgebasedata.service';

@Component({
  selector: 'app-addheading',
  templateUrl: './addheading.component.html',
  styleUrls: ['./addheading.component.css']
})
export class AddheadingComponent implements OnInit {
Obj;
H_Name : String;
H_Data : String;



  constructor(public DataExchange : DataexchangeService, public PostData : KnowledgebasedataService) { }
AddHeading(AddHeadingForm){

}
getdetails(Drop){
  console.log(Drop);
}
  ngOnInit() {

this.Obj = this.DataExchange.GetData();
console.log(this.Obj);

  }

}
