import { Component } from '@angular/core';

@Component({
  selector: 'app-lucky-number',
  template: `
    <button type="submit" (click)="shownum()">Get lucky number</button>
    <p *ngIf="visible">
      Your Lucky Number is {{luckyNumber}}
    </p>
    
    <button (click)="changenum()" type="submit">change number</button>
  `,
  styles: [
  ]
})
export class LuckyNumberComponent {

  luckyNumber:number =Math.round(Math.random()*10)
  visible:boolean = false;

  shownum(){
    this.visible = true;
  }

  changenum() {
    this.luckyNumber = Math.round(Math.random()*10)
  }
}
