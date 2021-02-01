import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export enum Gender {
  NONE = 0,
  STALLION = 1,
  MARE = 2,
  GELDING = 3,
}

export enum Color {
  NONE = 0,
  CHESTNUT = 1,
  BAY = 2,
  BLACK = 3,
  GRAY = 4,
  PINTO = 5,
}

export interface IBreed {
  id: number
  nameEn: string | null
}

export interface IHorse {
  id: number
  name: string | null
  breedId: number
  gender: Gender
  color: Color
  registrationNumber: string | null
  dateOfBirth: string | null
  heightCm: number
  sireName: string | null
  sireId: number | null
  damName: string | null
  damId: number | null
}

const getBaseUrl = () => (isDevMode() ? 'https://localhost:5001' : 'https://localhost:5001');

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getHorses() {
    return this.http.get<IHorse[]>(`${getBaseUrl()}/horse`);
  }
}
