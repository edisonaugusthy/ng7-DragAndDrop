import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggerDirective } from './dragger.directive';
import { DropperDirective } from './dropper.directive';

@NgModule({
  declarations: [DraggerDirective, DropperDirective],
  imports: [
    CommonModule
  ],
  exports: [DraggerDirective, DropperDirective]
})
export class DragAndDropModule { }
