import { Component, OnInit } from '@angular/core';

import { ApiService, IBreed, IHorse } from '../api.service';

@Component({
  selector: 'app-horse-list',
  templateUrl: './horse-list.component.html',
  styleUrls: ['./horse-list.component.scss'],
})
export class HorseListComponent implements OnInit {
  horses: IHorse[] = [];

  breeds: IBreed[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getHorses().subscribe((data) => { this.horses = data; });
    this.apiService.getBreeds().subscribe((data) => { this.breeds = data; });
  }
}
