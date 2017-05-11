import { Component, OnInit} from '@angular/core';
import {  KnowledgebasedataService } from '../knowledgebasedata.service';

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css'],
})
export class MainbodyComponent implements OnInit {
data =[];
err = false;
  constructor( public KnowledgeService : KnowledgebasedataService) {}

GetTitlelist(){
this.KnowledgeService.GetTitles().subscribe(res=>{
 this.data=res
 this.err = false;
 console.log(this.data);
 
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
 console.log(this.data);
 
}
,errorr =>{
alert('Error') ;
this.err = true;
});
}

GetSearchlist(){
this.KnowledgeService.GetSearch().subscribe(res=>{
 this.data=res
 this.err = false;
 console.log(this.data);
 
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
   

  ngOnInit() {
  }
}
