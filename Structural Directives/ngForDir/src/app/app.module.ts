import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgforCompComponent } from './ngfor-comp/ngfor-comp.component';
import { NgifCompComponent } from './ngif-comp/ngif-comp.component';
import { NgswitchCompComponent } from './ngswitch-comp/ngswitch-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    NgforCompComponent,
    NgifCompComponent,
    NgswitchCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
