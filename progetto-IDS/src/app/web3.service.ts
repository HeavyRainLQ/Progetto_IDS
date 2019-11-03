import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  private subject = new Subject<any>();

  sendMessage(user: object) {
      this.subject.next(user);
      console.log(this.subject);
  }

  clearMessages() {
      this.subject.next();
  }

  getMessage(): Observable<object> {
      return this.subject.asObservable();
  }
  constructor() { }
}
