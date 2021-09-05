import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

import { StrokeElement } from './svg-draw-stroke.common';

@Directive({
  selector: '[bdtSvgDrawStroke], bdtSvgDrawStroke',
})
export class SvgDrawStrokeDirective implements AfterViewInit {
  @Input() manualInit = false;
  @Input() strokeLinecap: 'butt' | 'round' | 'square' | false = 'round';
  @Input() strokeLinecapAll = false;

  private _isSvgElement = false;
  private _isInit = false;

  public stokeElements: StrokeElement[] = [];
  public nativeElement: SVGElement | undefined;

  constructor(
    private _element: ElementRef<SVGElement>,
    public _renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    if (!this.manualInit) {
      this.init();
    }
  }

  public init(): void {
    if (this._isInit) {
      console.warn(`bdtSvgDrawStroke already initialized!`);
      return;
    }

    this._checkElementType();

    if (this._isSvgElement) {
      this._setNativeElement();
      this._getStrokeNodes(this._element.nativeElement.childNodes);
      this._isInit = true;
    }
  }

  private _checkElementType(): void {
    if (this._element.nativeElement instanceof SVGElement) {
      this._isSvgElement = true;
    } else {
      console.error(`Element type is not SVGElement`, {
        element: this._element.nativeElement,
      });
    }
  }

  private _getStrokeNodes(nodes: NodeListOf<ChildNode>): void {
    if (nodes.length) {
      nodes.forEach((node) => {
        if (node.childNodes.length) {
          this._getStrokeNodes(node.childNodes);
        }
        if (node instanceof SVGGeometryElement) {
          if (node.getAttribute('stroke-width')) {
            if (this.strokeLinecapAll && this.strokeLinecap) {
              this._setStrokeLinecap(node);
            } else if (
              !node.getAttribute('stroke-linecap') &&
              this.strokeLinecap
            ) {
              this._setStrokeLinecap(node);
            }
            const strokeTotal = Math.ceil(node.getTotalLength()) + 1;
            this.stokeElements.push({
              element: node,
              strokeTotal,
            });
            this._setStrokeDasharray(node, strokeTotal);
          } else {
            console.warn(`SVGGeometryElement has no attribute stroke-width`, {
              element: node,
            });
          }
        }
      });
    } else {
      console.warn(`SVGElement has no childes`, {
        element: this._element.nativeElement,
      });
    }
  }

  private _setNativeElement(): void {
    this.nativeElement = this._element.nativeElement;
  }

  private _setStrokeDasharray(node: ChildNode, strokeTotal: number): void {
    this._renderer.setStyle(node, 'stroke-dasharray', strokeTotal);
  }

  private _setStrokeLinecap(node: ChildNode): void {
    this._renderer.setStyle(node, 'stroke-linecap', this.strokeLinecap);
  }
}
