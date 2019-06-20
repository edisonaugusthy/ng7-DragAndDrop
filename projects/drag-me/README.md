# How to use

Add `import { DragMeModule } from 'drag-me';` in App  Module

#### Then add it to imports
    imports: [
        BrowserModule,
        DragMeModule
    ],

#### And in html use like

###### Add `dragMe` Directive to the element to drag

    <div dragMe [dragdata]="item" (ondrop)="onDrop($event)"></div>

NB:`[dragdata]` is the data to carry,`(ondrop)` is callback on drop

###### Add `dropHere` Directive to the Container to Drop

    <div  dropHere (dropped)='onDrop($event)'></div>

NB:`(dropped)` is callback on drop
#### Adding style

1. On Dragging `drag-src` class is added to the dragging element and we can customize our own style
2. `over` class is added to the target element when drag over the item



Install using npm : `npm i drag-me --save `
