import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { faker } from '@faker-js/faker';

export interface IUser {
  id: number;
  last_name: string;
  first_name: string;
  country: string;
  phone: string;
  // and so on
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  _data: IUser[] = [];

  constructor() {
    for (let i = 0; i <= 1000; i++) {
      this._data.push({
        id: i,
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        country: faker.address.country(),
        phone: faker.phone.phoneNumber(),
      });
    }
  }

  data$: Observable<string> = of('Hello, this is question c!');

  getUsers(): IUser[] {
    return this._data;
  }

  clear() {}
}
