import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {
  merchantId: string;
  public itemNames: any = [];
  userId: string;
  shareDataString: string;
  shareBase64: string;
  shareColor: string;
  constructor() { }
}
