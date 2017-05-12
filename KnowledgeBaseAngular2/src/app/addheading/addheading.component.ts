import { Component, OnInit } from '@angular/core';
import { DataexchangeService } from '../dataexchange.service';
import { KnowledgebasedataService } from '../knowledgebasedata.service';

@Component({
  selector: 'app-addheading',
  templateUrl: './addheading.component.html',
  styleUrls: ['./addheading.component.css']
})
export class AddheadingComponent implements OnInit {
  Titles;
  AddNewHeading: {
    H_Name: String,
    H_Data: String,
    T_ID: Number
  }


  constructor(public DataExchange: DataexchangeService, public PostData: KnowledgebasedataService) { }
  AddHeading(id) {
    this.AddNewHeading.T_ID = id;
    this.PostData.PostHeadings(this.AddNewHeading).subscribe(data => { return true; }
      , errorr => { console.log(errorr) }

    )
    console.log(this.AddNewHeading);

  }
  getdetails(Drop) {
    console.log(Drop);
  }
  ngOnInit() {

    this.Titles = this.DataExchange.GetData();
    console.log(this.Titles);

  }

}
