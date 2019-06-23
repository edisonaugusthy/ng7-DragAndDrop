import { Directive, Input, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[dragMe]'
})
export class DraggerDirective implements OnInit {
  @Input() dragdata: any = {};
  @Output() ondrop: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

    const el = this.elementRef.nativeElement;
    el.draggable = 'true';
    el.addEventListener('dragstart', (e) => {
      el.classList.add('drag-src');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text', JSON.stringify(this.dragdata));
    });

    // Remove the drag-src class
    el.addEventListener('dragend', (e) => {
      e.preventDefault();
      this.ondrop && (this.ondrop.emit(this.dragdata))
      el.classList.remove('drag-src')
    });

  }




}
