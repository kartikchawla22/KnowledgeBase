import { Component, OnInit} from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl, FormsModule } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  username:string;
  password:string;

  public UserForm: FormGroup;        // This  is the UserForm of type FormGroup.

  constructor(public FormValidation: FormBuilder,public send:AuthenticationService) {


    this.UserForm = this.FormValidation.group({
      Username: [null, [Validators.required, Validators.pattern('[a-z]|[A-Z]')]],
      Password: [null, [Validators.required]]   // This give the Validation for the UserForm. 
    });

  }
a(){
  alert("hello");
}
  ngOnInit() {  }

check(UserForm){
  this.send.set(UserForm.value.Username,UserForm.value.Password)
}

}


