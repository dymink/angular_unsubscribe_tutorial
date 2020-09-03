import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { concat, merge, zip, of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-example-composition',
  templateUrl: './example-composition.component.html',
  styleUrls: ['./example-composition.component.scss'],
})
export class ExampleCompositionComponent implements OnInit {
  users = zip(
    this.usersService.getUsersFromUSA(),
    this.usersService.getUsersFromPoland(),
    this.usersService.getUsersFromMars()
  ).pipe(map((res) => [].concat(...res)));

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}
}
