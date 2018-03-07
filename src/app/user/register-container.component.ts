import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-container',
  template: `
    <app-box-page>
      <app-register></app-register>
    </app-box-page>
  `,
  styles: []
})
export class RegisterContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
