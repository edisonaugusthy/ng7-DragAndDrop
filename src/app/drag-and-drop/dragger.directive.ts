import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDragger]'
})
export class DraggerDirective implements OnInit {
  @Input() dragdata: any;
  constructor(private _elementRef: ElementRef) { }
  ngOnInit() {

    let el = this._elementRef.nativeElement;
    el.draggable = 'true';
    el.addEventListener('dragstart', (e) => {
      console.log('Start');
      el.classList.add('drag-src')
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
