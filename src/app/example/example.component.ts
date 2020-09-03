import { UsersService } from './../services/users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit, OnDestroy {
  usaSubscription: Subscription;
  polandSubscription: Subscription;
  marsSubscription: Subscription;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usaSubscription = this.usersService.getUsersFromUSA().subscribe();
    this.polandSubscription = this.usersService
      .getUsersFromPoland()
      .subscribe();
    this.marsSubscription = this.usersService.getUsersFromMars().subscribe();
  }

  ngOnDestroy(): void {
    this.usaSubscription.unsubscribe();
    this.polandSubscription.unsubscribe();
    this.marsSubscription.unsubscribe();
  }
}
