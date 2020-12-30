import { AfterViewChecked, AfterViewInit, Component, ViewChild } from "@angular/core";
import { ChildComponent } from "../child/child-component";

@Component({
    selector: 'app-after-view',
    template: `
     <div>-- child view begins --</div>
    <app-child></app-child>
    <div>-- child view ends --</div>
    `,
    styles: [``]
})
export class AfterViewComponent implements AfterViewInit, AfterViewChecked {
    prevHero = '';

    @ViewChild(ChildComponent) childComponent?: ChildComponent;
    comment?: string;

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit');
        this.doSomenting();
    }

    doSomenting() {
        const comment = (this.childComponent?.hero.length ?? 0) > 10  ? `That's a long name` : '';
        if (comment && comment !== this.comment) {
            this.comment = comment;
            console.warn(comment);
        }
    }

    ngAfterViewChecked(): void {
        if (this.prevHero === this.childComponent?.hero) {
            console.log('ngAfterViewChecked (No changes)');
        } else {
            this.prevHero = this.childComponent?.hero ?? '';
            console.log('ngAfterViewChecked');
            this.doSomenting();
        }
    }

}