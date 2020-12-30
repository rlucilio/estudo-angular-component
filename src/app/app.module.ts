import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentTestComponent } from './component-test/component-test.component';
import { ComponentTestManual } from "./component-test-manual/component-test-manual";
import { PeekABooComponentComponent } from './peek-aboo-component/peek-aboo-component.component';
import { SpyDirective } from './spy.directive';
import { CounterComponentComponent } from './counter-component/counter-component.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child-component';
import { AfterViewComponent } from './after-view/after-view-component';
@NgModule({
  declarations: [
    AppComponent,
    ComponentTestComponent,
    ComponentTestManual,
    PeekABooComponentComponent,
    SpyDirective,
    CounterComponentComponent,
    OnChangesComponent,
    ChildComponent,
    AfterViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
