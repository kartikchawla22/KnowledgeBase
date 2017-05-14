import { Component, OnInit} from '@angular/core';
import {  KnowledgebasedataService } from '../knowledgebasedata.service';
import { DataexchangeService } from '../dataexchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css'],
})
export class MainbodyComponent implements OnInit {
data;
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
  constructor( public KnowledgeService : KnowledgebasedataService, public DataExchange : DataexchangeService, public router :Router) {}

// This function will get the list of titles.
GetTitlelist(){
this.KnowledgeService.GetTitles().subscribe(res=>{
 this.Titles=res
this.DataExchange.SendTitles(this.Titles);

}
,errorr =>{             // If there is an error it will alert an error.
alert('Error') ;
});
}


// This function will get the list of headings and the new headings users want to add more headings.
GetHeadinglist(){
// this.KnowledgeService.GetHeadings().subscribe(res=>{
 this.data=[{"_id":"5916c58634b87a284c558060","T_ID":1,"H_Name":"to kill a mocking bird","H_Data":"Shiv Khera","H_Id":2,"__v":0},{"_id":"5916c59d34b87a284c558061","T_ID":2,"H_Name":"revenge","H_Data":"thor","H_Id":3,"__v":0},{"_id":"5916c5bd34b87a284c558062","T_ID":2,"H_Name":"snowhite and seven dwarfs","H_Data":"story","H_Id":4,"__v":0},{"_id":"5916c5db34b87a284c558063","T_ID":3,"H_Name":"galaxy of the gaurdians","H_Data":"andrew","H_Id":5,"__v":0},{"_id":"5916c5f534b87a284c558064","T_ID":4,"H_Name":"silvestster black","H_Data":"kelly","H_Id":6,"__v":0},{"_id":"5916c64134b87a284c558065","T_ID":4,"H_Name":"manithaa","H_Data":"swany","H_Id":7,"__v":0},{"_id":"5916c65d34b87a284c558066","T_ID":3,"H_Name":"alex in the wonderlnd","H_Data":"mittty","H_Id":8,"__v":0},{"_id":"5916c6ce34b87a284c558068","T_ID":1,"H_Name":"margrate","H_Data":"alan walker","H_Id":1,"__v":0}];
 for ( var i = 0 ; i < this.data.length; i++){
if(this.data[i].T_ID == 1)
{
  this.Movies[this.CM] = this.data[i];
  this.CM ++;
}
 
else if(this.data[i].T_ID == 2){
  this.Novels[this.CN] = this.data[i];
  this.CN++;
}
else if(this.data[i].T_ID == 3){

  this.Poems[this.CP] = this.data[i];
  this.CP++;
}
else{
this.Biography[this.CB] = this.data[i];
this.CB++;
}
 }
 console.log(this.Movies);

console.log(this.data[0]);
// ,errorr =>{            // If there is an error it will alert an error.
// alert('Error') ;
// });
 }
DisplayMovies(item){
  console.log(this.Movies[item] + " helllo");
this.DataExchange.SendData(this.Movies[item]);
} 
DisplayNovels(item){
  console.log(this.Movies[item] + " helllo");
this.DataExchange.SendData(this.Novels[item]);
} 
DisplayPoems(item){
  console.log(this.Movies[item] + " helllo");
this.DataExchange.SendData(this.Poems[item]);
} 
DisplayBio(item){
  console.log(this.Movies[item] + " helllo");
this.DataExchange.SendData(this.Biography[item]);
}
Display(item){
  console.log(item+ "helllo");
this.DataExchange.SendData(item);
 this.router.navigate(['/showdata']);
} 

  ngOnInit() 
  {
    this.GetHeadinglist();
   this.GetTitlelist();
  }
}
