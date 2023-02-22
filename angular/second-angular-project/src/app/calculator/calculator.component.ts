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
    this.result = this.firstnum + this.secondnum;
    this.visible = true;
  }
  
  handlesubstract(){
    this.result = this.firstnum - this.secondnum;
    this.visible = true;
  }
}
