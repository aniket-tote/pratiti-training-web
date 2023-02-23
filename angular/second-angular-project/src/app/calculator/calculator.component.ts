import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  firstnum!:number;
  secondnum!:number;
  result!:number;

  visible!:boolean;

  handleadd(){
    this.result = Math.round(Math.random()*100);
    this.visible = true;
  }
  
  handlesubstract(){
    this.result = Math.round(Math.random()*100);
    this.visible = true;
  }
}
