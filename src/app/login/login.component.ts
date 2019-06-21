import * as core from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@core.Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements core.OnInit {

  constructor(private router: Router, private loginservice: LoginService) { }
  usersDetail: any = [];
  message = "";

  ngOnInit() {
    this.loginservice.getUsers().subscribe((data) => { this.usersDetail = data; })
  }

  onSubmit(form: NgForm) {
    console.log(form);
    let validate = this.validateUser(form);
    if (validate) {
      this.router.navigate(['/orders']);
    }
    else {
      this.message = "Username or Password is not valid"
    }
  }

  validateUser(user: NgForm) {
    for (let userdetail of this.usersDetail) {
      if (userdetail.userName == user.value.userName && userdetail.passWord == user.value.passWord) {
        return true;
      }
    }
    return false;
  }
}
