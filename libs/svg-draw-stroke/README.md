[![npm (scoped)](https://img.shields.io/npm/v/@ng-blue-duct-tape/svg-draw-stroke?color=blue&label=svg-draw-stroke&style=flat-square)](https://www.npmjs.com/package/@ng-blue-duct-tape/svg-draw-stroke)
![Badge](https://img.shields.io/npm/l/@ng-blue-duct-tape/svg-draw-stroke?style=flat-square&color=blue)

[<img src="https://i.ibb.co/HxzFqGN/blue-duct-tape-logo.png" width="100"/>](https://i.ibb.co/HxzFqGN/blue-duct-tape-logo.png)

![Split Text](https://i.ibb.co/J7gVLzJ/ng-blue-duct-tape-2.gif)

**SVG-DRAW-STROKE** - Angular library that allows you to access the SVG child elements that have the "stroke-width" attribute and get the total length.

## Features

- [x] Access all elements that have a stroke-width
- [x] Manual init
- [x] Set stroke-linecap (for elements that do not have this attribute)
- [x] Set stroke-linecap for all (set attribute for all elements)


## Getting started
### Step 1: Install `@ng-blue-duct-tape/svg-draw-stroke` ([npm](https://www.npmjs.com/package/@ng-blue-duct-tape/svg-draw-stroke)):
```she
npm i @ng-blue-duct-tape/svg-draw-stroke
```

### Step 2: Import SvgDrawStrokeModule:
```js
import { SvgDrawStrokeModule } from '@ng-blue-duct-tape/svg-draw-stroke';

@NgModule({
  declarations: [AppComponent],
  imports: [SvgDrawStrokeModule],
  bootstrap: [AppComponent]
})

export class AppModule {}
```

### Step 3: Add directive `bdtSvgDrawStroke` to svg element and template ID to reference this Directive in Component (example: `#svgEl`):
```html
<svg
  #svgEl
  bdtSvgDrawStroke
  width="850"
  height="206"
  viewBox="0 0 850 206"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M299.175 82.897C664.197-22.49 319.645-19.185 30.993 59.737c-51.34 14.036-78.064 60.684 311.515 54.002 560.074-9.607 462.987 20.77 432.978 30.117-169.18 49.014-29.579 61.099 72.514 60.087"
    stroke="#EB4626"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"/>
</svg>
```

### Step 4: Add @ViewChild to access svg child elements by previously assigned ID:
```js
@ViewChild('svgEl', { read: SvgDrawStrokeDirective }) svgEl: SvgDrawStrokeDirective;
```

### Step 5: Init animation (Example for [GSAP](https://greensock.com/gsap/)):
```js
export class AppComponent implements AfterViewInit {
  @ViewChild('svgEl', { read: SvgDrawStrokeDirective }) svgEl: SvgDrawStrokeDirective;
  tlSvg = gsap.timeline();
  
  constructor() {}
  
  ngAfterViewInit(): void {
    this.svgAnimation();
  }

  svgAnimation(): void {
    const strokeElement = this.svgEl.stokeElements[0];
    this.tlSvg
      .clear()
      .fromTo(
        strokeElement.element,
        {
          strokeDashoffset: strokeElement.strokeTotal,
        },
        {
          strokeDashoffset: 0,
          duration: 1,
          ease: Power2.easeInOut,
        },
      );
  }
}
```

## API
### Directives

| Name           |  Description |
| ------------- | ------------- |
| bdtSvgDrawStroke | Get SVG child elements |


### Inputs

| Name           | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| manualInit | `boolean` | `false` |  Manual initiation `init()` |
| strokeLinecap | `'butt' / 'round' / 'square' / false` | `'round'` | Set strokeLinecap for elements without attribute |
| strokeLinecapAll | `boolean` | `false` | Set strokeLinecap attribute for all elements |


### Properties

| Name           | Type   | Description |
| ------------- | ------------- | ------------- |
| nativeElement | `SVGElement / undefined` | Container SVGElement (if element type is not SVGElement - nativeElement === undefined) |
| stokeElements | `StrokeElement[]` | Svg child elements (`StrokeElement` custom Interface) |


### Methods

| Name           | Description |
| ------------- | ------------- |
| init() |  Init. For using in case `[manualInit]="true"` |
