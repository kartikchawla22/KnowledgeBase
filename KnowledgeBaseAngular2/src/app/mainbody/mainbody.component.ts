import { Component, OnInit} from '@angular/core';
import {  KnowledgebasedataService } from '../knowledgebasedata.service';
import { DataexchangeService } from '../dataexchange.service';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css'],
})
export class MainbodyComponent implements OnInit {
data =[];
HeadingsNameList = [];
TitlesNamesList = [];
HeadingTitleIdList = [];
TitleIdList = [];
Movies = [];
Novels =[];
Poems = [];
Biography = [];
Titles;
CM = 0;
CN = 0;
CB = 0;
CP = 0;
err = false;
  constructor( public KnowledgeService : KnowledgebasedataService, public DataExchange : DataexchangeService) {}

GetTitlelist(){
this.KnowledgeService.GetTitles().subscribe(res=>{
 this.Titles=res
 this.err = false;
this.DataExchange.SendData(this.Titles);

}


,errorr =>{
alert('Error') ;
this.err = true;
});
}

GetHeadinglist(){
this.KnowledgeService.GetHeadings().subscribe(res=>{
 this.data=res
 this.err = false;
 for ( var i = 0 ; i < this.data.length; i++){
if(this.data[i].T_ID == 1)
{
  this.Movies[this.CM] = this.data[i].H_Name;
  this.CM ++;
}
else if(this.data[i].T_ID == 2){
  this.Novels[this.CN] = this.data[i].H_Name;
  this.CN++;
}
else if(this.data[i].T_ID == 3){

  this.Poems[this.CP] = this.data[i].H_Name;
  this.CP++;
}
else{
this.Biography[this.CB] = this.data[i].H_Name;
this.CB++;
}
 }
 console.log(this.Movies);
 
}
,errorr =>{
alert('Error') ;
this.err = true;
});
}



GetUsersist(){
this.KnowledgeService.GetUsers().subscribe(res=>{
 this.data=res
 this.err = false;
 console.log(this.data);
 
}
,errorr =>{
alert('Error') ;
this.err = true;
});
}
   

  ngOnInit() 
  {
    this.GetHeadinglist();
    this.GetTitlelist();
  }
}
