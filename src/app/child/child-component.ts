import { Component } from "@angular/core";

@Component({
    selector: 'app-child',
    template: `<input [(ngModel)]="hero">`,
    styles: [``]
})
export class ChildComponent {
    hero = 'renan' 
}