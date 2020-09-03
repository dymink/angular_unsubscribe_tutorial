import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-example-no-subscriptions',
  templateUrl: './example-no-subscriptions.component.html',
  styleUrls: ['./example-no-subscriptions.component.scss'],
})
export class ExampleNoSubscriptionsComponent implements OnInit {
  usaUsers = this.usersService.getUsersFromUSA();
  polandUsers = this.usersService.getUsersFromPoland();
  marsUsers = this.usersService.getUsersFromMars();

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}
}
