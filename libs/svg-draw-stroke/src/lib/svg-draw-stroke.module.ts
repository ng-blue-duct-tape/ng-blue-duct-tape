import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SvgDrawStrokeDirective } from './svg-draw-stroke.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SvgDrawStrokeDirective],
  exports: [SvgDrawStrokeDirective],
})
export class SvgDrawStrokeModule {}
