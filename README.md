# drag-me

![NPM Publish](https://github.com/edisonaugusthy/ng7-DragAndDrop/workflows/NPM%20Publish/badge.svg)
![Node.js CI](https://github.com/edisonaugusthy/ng7-DragAndDrop/workflows/Node.js%20CI/badge.svg)


A a custom drag and drop module for angular.

 #### Features

 - darg and drop any where in the dom
 - custom callbacks for `drag-start`, `drag-end`, `drop` events
 - Pass data in Dragging element
 - custom styling

![grab-landing-page](https://github.com/edisonaugusthy/ng7-DragAndDrop/blob/master/tes.gif)

Angular compatibility
| Angular Version                  | package version |
| -------------------------------- | :-------------: |
| angular 8 and below              | 1.1.5 and below |
| angular 9 and above(ivy version) | 1.1.6 and above |

## Usage steps

 - Run `npm i drag-me --save` in command prompt from root of your project folder
 - Add import to App Module like this `import { DragMeModule } from 'drag-me';`
 - Add to imports array in app module

    ```js
    imports: [
        BrowserModule,
        StorageModule
        ],
    ```
- Add `dragMe` Directive to the element to drag

    ```html
    <div dragMe [dragdata]="item" (ondrop)="onDrop($event)"></div>
    ```
    >NB:`[dragdata]` is the data to carry,`(ondrop)` is callback on drop

- Add `dropHere` Directive to the Container to Drop

    ```html
    <div  dropHere (dropped)='onDrop($event)'></div>
    ```

    >NB:`(dropped)` is callback on drop

#### Adding style

1. On Dragging `drag-src` class is added to the dragging element and we can customize our own style
2. `over` class is added to the target element when drag over the item

#### All Available methods

 - `dragStart()`
 - `dropped()`
 - `ondrop()`

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/vivaldi/vivaldi_48x48.png" alt="Vivaldi" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Vivaldi |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                      | last 8 versions                                                                                                                                                                                                   | last 8 versions                                                                                                                                                                                               | last 5 versions                                                                                                                                                                                                   |


## Built with 🔧

* Angular

## Developing 👷

1. [Clone this repo](https://github.com/edisonaugusthy/ng7-DragAndDrop.git) with git.
1. Install dependencies by running `npm install` within the directory that you cloned (probably `ng-ng7-DragAndDrop`).
1. Start the development server with `ng serve --o`.
1. Open development site by going to [http://localhost:4200](http://localhost:4200) in your browser.

## Author 🔮

<table>
  <tr>
    <td align="center"><a href="https://github.com/edisonaugusthy"><img src="https://github.com/edisonaugusthy.png?size=100" width="100px;" alt="Edison"/><br /><sub><b>Edison Augusthy</b></sub></a><br /><a href="https://github.com/edisonaugusthy/ng7-DragAndDrop/commits?author=edisonaugusthy" title="Edison">💻</a></td>

  </tr>

</table>



