import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  username!:string;
  state!:any;

  constructor(private router:Router){
    if(this.router.getCurrentNavigation()?.extras){
      this.state = this.router.getCurrentNavigation()?.extras.state;
      this.username = this.state.username;
    }
  }
}
