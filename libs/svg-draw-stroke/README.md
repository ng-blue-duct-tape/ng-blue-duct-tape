

[![npm (scoped)](https://img.shields.io/npm/v/@ng-blue-duct-tape/svg-draw-stroke?color=blue&label=svg-draw-stroke&style=flat-square)](https://www.npmjs.com/package/@ng-blue-duct-tape/svg-draw-stroke)
![Badge](https://img.shields.io/npm/l/@ng-blue-duct-tape/svg-draw-stroke?style=flat-square&color=blue)

[<img src="https://i.ibb.co/HxzFqGN/blue-duct-tape-logo.png" width="250"/>](https://i.ibb.co/HxzFqGN/blue-duct-tape-logo.png)

![Split Text](https://i.ibb.co/J7gVLzJ/ng-blue-duct-tape-2.gif)

[comment]: <> (**NG-GX-SPLIT-TEXT** - This is an Angular utility to split text into words, lines or chars for subsequent animations.)

[comment]: <> (You can familiarize yourself with the demo version here - [DEMO]&#40;https://geex-arts.github.io/ng-gx-split-text/demo/&#41;)

[comment]: <> (## Versions)

[comment]: <> (| Angular        | ng-gx-split-text |  )

[comment]: <> (|----------------|------------------|  )

[comment]: <> (|>=8.0.0  <9.0.0 | v0.0.x           |)

[comment]: <> (## Features)

[comment]: <> (- [x] Split into chars)

[comment]: <> (- [x] Split into words)

[comment]: <> (- [x] Split into line-chars)

[comment]: <> (- [x] Split into line-words)

[comment]: <> (- [x] Defer init)


[comment]: <> (## Getting started)

[comment]: <> (### Step 1: Install `ng-gx-split-text`:)

[comment]: <> (```shell)

[comment]: <> (npm install ng-gx-split-text)

[comment]: <> (```)

[comment]: <> (### Step 2: Import NgGxSplitTextModule:)

[comment]: <> (```js)

[comment]: <> (import { NgGxSplitTextModule } from 'ng-gx-split-text';)

[comment]: <> (@NgModule&#40;{)

[comment]: <> (  declarations: [)

[comment]: <> (    AppComponent,)

[comment]: <> (  ],)

[comment]: <> (  imports: [)

[comment]: <> (    NgGxSplitTextModule,)

[comment]: <> (  ],)

[comment]: <> (  bootstrap: [AppComponent])

[comment]: <> (}&#41;)

[comment]: <> (export class AppModule {})

[comment]: <> (```)

[comment]: <> (### Step 3: Add directive to HTML node you want to split and template ID to reference this Directive in Component &#40;example: #text&#41;:)

[comment]: <> (```html)

[comment]: <> (<p #text ngGxSplitText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet consequuntur culpa)

[comment]: <> (  delectus, doloribus exercitationem ipsam, laudantium molestiae non numquam odit omnis optio praesentium quae ratione)

[comment]: <> (  similique sit soluta voluptatem?</p>)

[comment]: <> (```)

[comment]: <> (### Step 4: Add @ViewChild to access node words, lines and chars by previously assigned ID:)

[comment]: <> (```js)

[comment]: <> (  @ViewChild&#40;'text', { static: true, read: NgGxSplitTextDirective }&#41; text: NgGxSplitTextDirective;)

[comment]: <> (```)

[comment]: <> (### Step 5: Work with split text using @ViewChild &#40;Example for [GSAP]&#40;https://greensock.com/gsap/&#41;&#41;:)

[comment]: <> (```js)

[comment]: <> (export class AppComponent implements AfterViewInit {)
  
[comment]: <> (  @ViewChild&#40;'text', {static: true, read: NgGxSplitTextDirective}&#41; text: NgGxSplitTextDirective;)
  
[comment]: <> (  tlText = new TimelineMax&#40;&#41;;)
  
[comment]: <> (  constructor&#40;&#41; {})
  
[comment]: <> ( ngAfterViewInit&#40;&#41;: void {)

[comment]: <> (    this.textAnimation&#40;&#41;;)

[comment]: <> (  })

[comment]: <> (  textAnimation&#40;&#41; {)

[comment]: <> (    this.tlText)

[comment]: <> (      .to&#40;this.text.words, 0.5, {)

[comment]: <> (        opacity: 0,)

[comment]: <> (      }&#41;)

[comment]: <> (      .staggerFromTo&#40;this.text.words, 0.5, {)

[comment]: <> (        opacity: 0,)

[comment]: <> (        x: &#40;&#41; => {)

[comment]: <> (          return _.random&#40;-100, 100&#41;;)

[comment]: <> (        },)

[comment]: <> (        y: &#40;&#41; => {)

[comment]: <> (          return _.random&#40;-100, 100&#41;;)

[comment]: <> (        },)

[comment]: <> (        rotation: &#40;&#41; => {)

[comment]: <> (          return _.random&#40;-25, 25&#41;;)

[comment]: <> (        },)

[comment]: <> (        immediateRender: false,)

[comment]: <> (      }, {)

[comment]: <> (        opacity: 1,)

[comment]: <> (        x: 0,)

[comment]: <> (        y: 0,)

[comment]: <> (        rotation: 0,)

[comment]: <> (      }, 0.03&#41;;)

[comment]: <> (  })

[comment]: <> (})

[comment]: <> (```)

[comment]: <> (#[DEMO]&#40;https://geex-arts.github.io/ng-gx-split-text/demo/&#41;)

[comment]: <> (## API)

[comment]: <> (### Directives)

[comment]: <> (| Name           |  Description |)

[comment]: <> (| ------------- | ------------- |)

[comment]: <> (| NgGxSplitText | Split your text &#40;all `options` is default&#41; |)

[comment]: <> (| [NgGxSplitText] | Split your text &#40;custom `options`&#41;|)

[comment]: <> (### Options)

[comment]: <> (| Name           | Type | Default | Description |)

[comment]: <> (| ------------- | ------------- | ------------- | ------------- |)

[comment]: <> (| defer | `boolean` | `false` |  Defer initiation &#40;for manual initiation use `initSplit&#40;&#41;`&#41; |)

[comment]: <> (#### Example:)

[comment]: <> (```html)

[comment]: <> (<p #text ngGxSplitText>Lorem ipsum dolor...</p> // Default options)

[comment]: <> (<p #text [ngGxSplitText]="{defer: true, ...}">Lorem ipsum dolor...</p> // Custom options)

[comment]: <> (```)

[comment]: <> (### Properties)

[comment]: <> (| Name           | Type   | Description |)

[comment]: <> (| ------------- | ------------- | ------------- |)

[comment]: <> (| isInit | `boolean`| Is Split Text applied  |)

[comment]: <> (| nativeElement | `HTMLElement` | Container HTMLElement |)

[comment]: <> (| words | `HTMLElement[]` | Words HTMLElement array |)

[comment]: <> (| chars | `HTMLElement[]` | Chars HTMLElement array |)

[comment]: <> (| line-words | `HTMLElement[][]` | Line array with words HTMLElement array |)

[comment]: <> (| line-chars | `HTMLElement[][]` | Line array with chars HTMLElement array |)

[comment]: <> (#### Example:)

[comment]: <> (```js)

[comment]: <> (this.text.isInit // console.log&#40;true&#41;;)

[comment]: <> (this.text.srcText // console.log&#40;Lorem ipsum dolor...&#41;;)

[comment]: <> (```)

[comment]: <> (### Methods)

[comment]: <> (| Name           | Description |)

[comment]: <> (| ------------- | ------------- |)

[comment]: <> (| initSplit&#40;&#41; |  Initialize Split Text &#40;For using in case `defer: true`&#41; |)

[comment]: <> (| resetSplit&#40;&#41; |  Reset to source text |)

[comment]: <> (#### Example:)

[comment]: <> (```js)

[comment]: <> (ngAfterViewInit&#40;&#41;: void {)

[comment]: <> (    // if Split Text already initialized &#40;defer: false&#41;)

[comment]: <> (    this.text.initSplit&#40;&#41;; // Return WARNING! Text already initialized)
    
[comment]: <> (    // if Split Text not initialized &#40;defer: true&#41;)

[comment]: <> (    this.text.initSplit&#40;&#41;; // It's OK!)

[comment]: <> (  })

[comment]: <> (```)
