import { Component, OnInit } from '@angular/core';
import { DataexchangeService } from '../services/dataexchange.service';


@Component({
  selector: 'app-searchdisplay',
  templateUrl: './searchdisplay.component.html',
  styleUrls: ['./searchdisplay.component.css']
})
export class SearchdisplayComponent implements OnInit {
  searchResults;
  constructor(public searchdata: DataexchangeService) { }

  abc() {
    this.searchResults = this.searchdata.GetSearchResult();
    console.log(this.searchResults);
  }
  ngOnInit() {


  }

}
