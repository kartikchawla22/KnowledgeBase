import { Component, OnInit } from '@angular/core';
import { KnowledgebasedataService } from '../knowledgebasedata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
SearchItem;
getresponse;
  constructor(public search : KnowledgebasedataService, public router : Router) { }
SearchDb(){
// this.getresponse = this.search.GetSearch(this.SearchItem);
console.log(this.getresponse);
this.router.navigate(['/searchdisplay']);
}
  ngOnInit() {
  }

}
