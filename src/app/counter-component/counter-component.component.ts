import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.scss']
})
export class CounterComponentComponent implements OnInit, OnChanges {

  @Input() count?: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change componente');
  }

  ngOnInit(): void {
  }

}
