import { Pipe, PipeTransform } from '@angular/core';

import { Color } from './api.service';

@Pipe({
  name: 'color',
})
export class ColorPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case Color.CHESTNUT:
        return 'Chestnut';
      case Color.BAY:
        return 'Bay';
      case Color.BLACK:
        return 'Black';
      case Color.GRAY:
        return 'Gray';
      case Color.PINTO:
        return 'Pinto';
      default:
        return '(unknown)';
    }
  }
}
