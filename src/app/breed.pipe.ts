import { Pipe, PipeTransform } from '@angular/core';

import { ApiService } from './api.service';

@Pipe({
  name: 'breed',
})
export class BreedPipe implements PipeTransform {
  constructor(private apiService: ApiService) {}

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
