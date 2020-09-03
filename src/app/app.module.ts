import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { UsersService } from './services/users.service';
import { ExampleTakeUntilComponent } from './example-take-until/example-take-until.component';
import { ExampleNoSubscriptionsComponent } from './example-no-subscriptions/example-no-subscriptions.component';
import { ExampleCompositionComponent } from './example-composition/example-composition.component';

@NgModule({
  declarations: [AppComponent, ExampleComponent, ExampleTakeUntilComponent, ExampleNoSubscriptionsComponent, ExampleCompositionComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
