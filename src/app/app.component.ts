import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    works!
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'app';
}
