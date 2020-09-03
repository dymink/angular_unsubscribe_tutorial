import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { User } from '../interfaces/user';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getUsersFromUSA(): Observable<User[]> {
    return of([{ name: 'Karen' }, { name: 'Brian' }]).pipe(delay(1000));
  }

  getUsersFromPoland(): Observable<User[]> {
    return of([{ name: 'Bogdan' }, { name: 'Celina' }]).pipe(delay(1000));
  }

  getUsersFromMars(): Observable<User[]> {
    return of([{ name: 'Xen' }, { name: 'Zu' }]).pipe(delay(1000));
  }
}
