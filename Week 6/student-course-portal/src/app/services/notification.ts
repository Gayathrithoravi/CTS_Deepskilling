import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

  message = 'No notifications';

  show(message: string) {
    this.message = message;
  }

}