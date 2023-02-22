import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <p>
      Hello {{name}}
    </p>
  `,
  styles: [
    `
      p{
        color:black;
      }
    `
  ]
})
export class HelloComponent {
  name="aniket"
}
