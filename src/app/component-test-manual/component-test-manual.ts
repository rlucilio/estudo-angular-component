import { Component } from '@angular/core';

@Component({
    selector: 'app-component-test-manual',
    template: `
    <p>componente test manual</p>
    `,
    styles: [`
        p {
            color: red;
        }
    `]
})
export class ComponentTestManual {}