import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[dragMe]'
})
export class DraggerDirective implements OnInit {
  @Input() dragdata: any;
  constructor(private elementRef: ElementRef) { }
  ngOnInit() {

    const el = this.elementRef.nativeElement;
    el.draggable = 'true';
    el.addEventListener('dragstart', (e) => {
      console.log('Start');
      el.classList.add('drag-src');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text', JSON.stringify(this.dragdata));
    });

    // Remove the drag-src class
    el.addEventListener('dragend', (e) => {
      e.preventDefault();
      el.classList.remove('drag-src')
    });

  }
}
