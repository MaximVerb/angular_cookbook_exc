import { Component, OnInit } from '@angular/core';
import {NotificationsService} from "../services/notifications.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-notifications-button',
  templateUrl: './notifications-button.component.html',
  styleUrls: ['./notifications-button.component.scss']
})
export class NotificationsButtonComponent implements OnInit {
  notificationsCount$ : Observable<number>;

  constructor(public notifServ : NotificationsService) {
    this.notificationsCount$ = notifServ.countAction$;
  }

  ngOnInit(): void {
  }

}
