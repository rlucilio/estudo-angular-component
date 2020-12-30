import { Directive, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

let nextId = 1;
@Directive({
  selector: '[appSpy]'
})
export class SpyDirective implements OnInit, OnDestroy, OnChanges {
  private id = nextId++;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change directive');
  }

  ngOnInit(): void {
    console.log(`Spy #${this.id} onInit`);
    
  }

  ngOnDestroy(): void {
    console.log(`Spy #${this.id} onDestroy`);
  }

}
