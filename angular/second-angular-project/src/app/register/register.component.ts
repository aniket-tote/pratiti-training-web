import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user:User = new User();
  visible!:boolean;

  handlesubmit(){
    console.log(this.user)
    this.visible = true;
  }
}

export class User{
  name!:string;
  email!:string;
  mobileNo!:string;
  username!:string;
  password!:string;
}
