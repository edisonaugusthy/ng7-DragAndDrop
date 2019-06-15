# How to use

Add `import { DragMeModule } from 'drag-me';` in App  Module

#### Then add it to imports
    imports: [
        BrowserModule,
        DragMeModule
    ],

#### And in html use like

###### Add `dragMe` Directive to the element to drag
    <div dragMe [dragdata]="item"></div>

###### Add `dropHere` Directive to the Container to Drop
    <div  dropHere (dropped)='onDrop($event)'></div>
    
NB:`[dragdata]` is the data to carry,`(dropped)` is callback on drop
#### Adding style

 On Dragging `drag-src` class is added to the dragging element and we can customize our own style


NPM Version : `npm i drag-me `
