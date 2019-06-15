import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[dragMe]'
})
export class DraggerDirective implements OnInit {
  @Input() dragdata: any;
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

    const el = this.elementRef.nativeElement;
    el.draggable = 'true';
    el.addEventListener('dragstart', (e) => {
      el.classList.add('drag-src');
      this.setDefaultStyle();
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text', JSON.stringify(this.dragdata));
    });

    // Remove the drag-src class
    el.addEventListener('dragend', (e) => {
      e.preventDefault();
      this.removeStyle();
      el.classList.remove('drag-src')
    });

  }

  setDefaultStyle() {
    const el = this.elementRef.nativeElement;
    el.style.backgroundColor = '#ccc';
    el.style.color = '#fff';
    el.style.padding = '5px';
    el.style.margin = '1px';
  }

  removeStyle() {
    const el = this.elementRef.nativeElement;
    el.removeAttribute('style');
  }
}
