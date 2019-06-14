import { NgModule } from '@angular/core';
import { DraggerDirective } from './Directive/dragger.directive';
import { DropperDirective } from './Directive/dropper.directive';

@NgModule({
  declarations: [DraggerDirective, DropperDirective],
  imports: [
  ],
  exports: [DraggerDirective, DropperDirective]
})
export class DragMeModule { }
