import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragMeModule } from 'drag-me';

import { AppComponent } from './app.component';

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
