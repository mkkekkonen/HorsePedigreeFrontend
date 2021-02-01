import { Pipe, PipeTransform } from '@angular/core';

import { IBreed } from './api.service';

@Pipe({
  name: 'breed',
})
export class BreedPipe implements PipeTransform {
  transform(value: number, breeds: IBreed[]): string {
    const breed = breeds.find((listBreed) => listBreed.id === value);

    if (!breed) {
      return '(unknown)';
    }

    return breed.nameEn;
  }
}
