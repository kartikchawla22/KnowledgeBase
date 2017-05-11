import { Component, OnInit} from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
<<<<<<< HEAD
  public UserForm: FormGroup;
  constructor(public FormValidation: FormBuilder) {

    this.UserForm = this.FormValidation.group({
      Username: [null, [Validators.required, Validators.pattern('[a-z]|[A-Z]')]],
      Password: [null, [Validators.required]]
=======
  constructor() {



>>>>>>> 52d568e798ffa073a38276190ddbacadbb390ba4

    });


  }
  



     

  ngOnInit() {  }

}
