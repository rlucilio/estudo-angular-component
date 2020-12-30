import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-component';
  hero: {name: string} = {name: 'renan'}
  power?: string;

  enablePeekABooComponent: boolean = false;
  count = 0; 

  destroyComponente() {
    const component = document.querySelector('app-peek-aboo-component')
    component?.remove();
  }
}
