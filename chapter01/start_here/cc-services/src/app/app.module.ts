import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationsManagerComponent } from './notifications-manager/notifications-manager.component';
import { NotificationsButtonComponent } from './notifications-button/notifications-button.component';
import {NotificationsService} from "./services/notifications.service";

@NgModule({
  declarations: [
    AppComponent,
    NotificationsManagerComponent,
    NotificationsButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
