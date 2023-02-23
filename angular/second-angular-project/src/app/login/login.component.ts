import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username!:string;
  password!:string;

  visible!:boolean;

  constructor(private router:Router){}

  handlesubmit(){
    if(this.username === "admin" && this.password === "root"){
      this.router.navigateByUrl('/hello', {state:{"username":this.username}})
    }else{
      this.visible = true;
    }
  }
}
