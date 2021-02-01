import { Pipe, PipeTransform } from '@angular/core';

import { Gender } from './api.service';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case Gender.STALLION:
        return 'Stallion';
      case Gender.MARE:
        return 'Mare';
      case Gender.GELDING:
        return 'Gelding';
      default:
        return '(unknown)';
    }
  }
}
