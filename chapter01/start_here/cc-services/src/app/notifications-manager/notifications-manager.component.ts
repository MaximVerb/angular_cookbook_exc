import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {NotificationsService} from "../services/notifications.service";
import {first, last, map, take} from "rxjs/operators";

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit {
  notificationsCount$ : Observable<number>;
  value : number;
  constructor(public notifServ : NotificationsService) { }

  ngOnInit(): void {
    this.notificationsCount$ = this.notifServ.countAction$;
  }

  getCountValue(callback) {
    this.notificationsCount$.pipe(
      first()
    ).subscribe(callback)
  }

  addNotification() {
    this.getCountValue((countVal) => {
      this.notifServ.setCount(++countVal)
    })
  }

  removeNotification() {
    this.getCountValue((countValue) => {
      if(countValue == 0) {
        return;
      }
      this.notifServ.setCount(--countValue);
    })
  }

  resetCount() {
    this.notifServ.setCount(0)
  }

}
