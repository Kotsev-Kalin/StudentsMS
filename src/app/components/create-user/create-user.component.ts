import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  registerForm: FormGroup;
  user: User = new User();
  submitted = false;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService
      .createUser(this.user).subscribe(data => {
        console.log(data)
        this.user = new User();
      },
      error => console.log(error),
      () => console.info('User created'));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
