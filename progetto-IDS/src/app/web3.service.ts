import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class Web3Service {
  private subject = new Subject<any>();
  api: any;
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
  constructor(private http: HttpClient) 
  { 
    this.api = environment.api;
  }//fine constructor



numberToSigned64x64(number: number): string {
    
    return '0x' + (number * Math.pow(2, 64)).toString(16);
  }//fine number

signed64x64ToNumber(signed64x64: number): number {
    return signed64x64 / Math.pow(2, 64);
 }//finecaonvert to number

 select_max() {
    return this.http.post(this.api+'/api/select_max_id.php', {})

  }//fine select max cod sal

  update_superata(id) {
    return this.http.post(this.api+'/api/update_soglia.php', {
    	id
    })
  }//fine select max cod sal


}
