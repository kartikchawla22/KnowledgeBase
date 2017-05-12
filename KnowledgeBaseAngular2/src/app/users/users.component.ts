import { Component, OnInit} from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public UserForm: FormGroup;        // This  is the UserForm of type FormGroup.

  constructor(public FormValidation: FormBuilder) {

    this.UserForm = this.FormValidation.group({
      Username: [null, [Validators.required, Validators.pattern('[a-z]|[A-Z]')]],
      Password: [null, [Validators.required]]   // This give the Validation for the UserForm. 
    });

  }

  ngOnInit() {  }

}
