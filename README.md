A a custom drag and drop library for angular.

#### Features

- darg and drop any where in the DOM Tree
- support callback for `drag-start`, `drag-end`, `drop` events
- Pass data in while draging element
- support for custom styling

![grab-landing-page](https://github.com/edisonaugusthy/ng7-DragAndDrop/blob/master/tes.gif)

Angular compatibility
| Angular Version | package version |
| -------------------------------- | :-------------: |
| angular 8 and below | 1.1.5 and below |
| angular 10 and below| 1.1.6 and above |
| angular 10+ | 1.1.7 and above |

## Usage steps

- Run `npm i drag-me --save` from root of your project folder
- import `DragMeModule` to App Module

```js
import { DragMeModule } from "drag-me";
```

- Add to imports array in app module

  ```js
  imports: [
      DragMeModule
      ],
  ```

- Add `dragMe` Directive to the element to drag

  ```html
  <div dragMe [dragdata]="item" (ondrop)="onDrop($event)"></div>
  ```

  > NB:`[dragdata]` is the data to carry,`(ondrop)` is callback on drop

- Add `dropHere` Directive to the Container to Drop

  ```html
  <div dropHere (dropped)="onDrop($event)"></div>
  ```

  > NB:`(dropped)` is callback on drop

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

- Angular

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
