import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragMeModule } from 'drag-me';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DragMeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
