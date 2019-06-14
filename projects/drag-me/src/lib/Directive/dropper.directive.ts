import { Directive, OnInit, EventEmitter, Output, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[dropHere]'
})
export class DropperDirective implements OnInit {
  @Output() dropped: EventEmitter<any> = new EventEmitter();
  constructor(private elementRef: ElementRef) { }
  ngOnInit() {
    const el = this.elementRef.nativeElement;


    el.addEventListener('dragenter', (e) => {
      el.classList.add('over');
    });

    el.addEventListener('dragleave', (e) => {
      el.classList.remove('over');
    });

    el.addEventListener('dragover', (e) => {
      if (e.preventDefault) {
        e.preventDefault();
      }

      e.dataTransfer.dropEffect = 'move';
      return false;
    });


    el.addEventListener('drop', (e) => {
      if (e.stopPropagation) {
        e.stopPropagation();
      }

      el.classList.remove('over');
      const data = JSON.parse(e.dataTransfer.getData('text'));
      this.dropped.emit(data);
      return false;
    });
  }
}
