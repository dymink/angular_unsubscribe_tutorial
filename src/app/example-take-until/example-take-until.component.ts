import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-example-take-until',
  templateUrl: './example-take-until.component.html',
  styleUrls: ['./example-take-until.component.scss'],
})
export class ExampleTakeUntilComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService
      .getUsersFromUSA()
      .pipe(takeUntil(this.destroy$))
      .subscribe();
    this.usersService
      .getUsersFromPoland()
      .pipe(takeUntil(this.destroy$))
      .subscribe();
    this.usersService
      .getUsersFromMars()
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
