import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class Web3Service {

  constructor() { }



numberToSigned64x64(number: number): string {
    
    return '0x' + (number * Math.pow(2, 64)).toString(16);
  }//fine number

signed64x64ToNumber(signed64x64: number): number {
    return signed64x64 / Math.pow(2, 64);
 }//finecaonvert to number


}
