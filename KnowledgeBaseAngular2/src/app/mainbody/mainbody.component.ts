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
HeadingsNameList;
TitlesNamesList ;
HeadingTitleIdList;
TitleIdList ;
Movies;
Novels ;
Poems ;
Biography;
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
this.KnowledgeService.GetHeadings().subscribe(res=>{
 this.data=res
console.log(this.data);
}
,errorr =>{            // If there is an error it will alert an error.
alert('Error') ;
});
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
}

DisplayMovies(item){
  console.log(this.Movies[item] + " helllo");
this.DataExchange.SendData(this.Movies[item]);
} 
DisplayNovels(item){
  console.log(this.Movies[item] + " helllo");
this.DataExchange.SendData(this.Movies[item]);
} 
DisplayPoems(item){
  console.log(this.Movies[item] + " helllo");
this.DataExchange.SendData(this.Movies[item]);
} 
DisplayBio(item){
  console.log(this.Movies[item] + " helllo");
this.DataExchange.SendData(this.Movies[item]);
}
Display(item){
  console.log(item+ "helllo");
this.DataExchange.SendData(item);
 this.router.navigate(['/showdata']);
} 

  ngOnInit() 
  {
   // this.GetHeadinglist();
   //this.GetTitlelist();
  }
  abc(){
    this.GetHeadinglist();
  }
}
