# How to use

Add `import { DragMeModule } from 'drag-me';` in App  Module

#### Then add it to imports
    imports: [
        BrowserModule,
        DragMeModule
    ],

#### And in html use like
    <div dragMe [dragdata]="item"></div>

    <div  dropHere (dropped)='onDrop($event)'></div>

NB:`[dragdata]` is the data to carry,`(dropped)` is callback on drop


NPM Version : `npm i drag-me `
