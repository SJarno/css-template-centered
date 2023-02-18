import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  

  credentials = {
    username: undefined,
    password: undefined
  };
  ngOnInit() {
    console.log(this.credentials);
  }

  test() {
    console.log('Should print')
    console.log(this.credentials);
  }

}
