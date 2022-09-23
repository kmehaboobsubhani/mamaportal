import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = environment.url;

  urlc = environment.urlc;
  error: any;

  constructor(private http: HttpClient) { }

 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'hfsKey': 'hfsAdmin'
  })
}  

   login(user): Observable<any> {
    console.log("Connecting..."+this.url + '/login')
    return this.http.post(this.url + '/login', JSON.stringify(user), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  forgotPassword(user): Observable<any> {
    console.log("Connecting..."+this.url + '/consumer/generateOtp')
    return this.http.post(this.url + '/consumer/generateOtp', JSON.stringify(user), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  saveCustomers(customer): Observable<any> {
    console.log("Connecting..."+this.url + '/saveCustomer')
    return this.http.post(this.url + '/saveCustomer', JSON.stringify(customer), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  saveBusiness(business): Observable<any> {
    console.log("Connecting..."+this.url + '/businessconfig')
    return this.http.post(this.url + '/businessconfig', JSON.stringify(business), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  AddItems(business): Observable<any> {
    console.log("add Items Connecting..."+ this.urlc +'/customer/addOrUpdateItem')
    return this.http.post(this.urlc +'/addOrUpdateItem', JSON.stringify(business), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  AddStock(item): Observable<any> {
    console.log("addOrUpdateStock: Connecting..."+this.url + '/addOrUpdateStock', JSON.stringify(item))
    return this.http.post(this.url + '/addOrUpdateStock', JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 

  getStock(merchantId: string): Observable<any> {
    console.log("Connecting..."+'http://vmdemo.hfsgroup.in:8080/hfs_vm/customer/stockOfMerchant/'+merchantId)
    return this.http.get(this.url + '/stockOfMerchant/'+merchantId, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  saveTech(business): Observable<any> {
    console.log("Connecting..."+this.url + '/techconfig')
    return this.http.post(this.url + '/techconfig', JSON.stringify(business), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  getMachines(merchantId: string): Observable<any> {
    console.log("Connecting..."+this.url + '/machines/'+merchantId)
    return this.http.get(this.url + '/machines/'+merchantId, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getLockers(merchantId: string): Observable<any> {
    console.log("Connecting..."+this.url + '/lockers/'+merchantId)
    return this.http.get(this.url + '/lockers/'+merchantId, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getLocks(masterLockerId: string): Observable<any> {
    console.log("Connecting..."+this.url + '/getLocks/'+masterLockerId)
    return this.http.get(this.url + '/getLocks/'+masterLockerId, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getSprings(merchantId: string, machineId: string): Observable<any> {
    console.log("Connecting..."+this.url + '/springs/'+merchantId+'/'+machineId)
    return this.http.get(this.url + '/springs/'+merchantId+'/'+machineId, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getMerchantTransactionsData(merchantId: string, machineId: string): Observable<any> {
    console.log("Stocks" +this.url + '/springs/'+merchantId+'/'+ machineId)
    return this.http.get(this.url + '/springs/'+merchantId+'/'+ machineId, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  getAllSpringsByMachine(posId): Observable<any> {
    console.log("Connecting..."+this.url + '/websprings/'+posId)
    return this.http.get(this.url + '/websprings/'+posId, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  getAllItemsOfMerchant(merchantId: string): Observable<any> {
    console.log("Connecting..."+this.url + '/itemsOfMerchant/'+merchantId)
    return this.http.get(this.url + '/itemsOfMerchant/'+merchantId, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getAllStatusOfMachines(merchantId: string): Observable<any> {
    console.log("Connecting...(getAllStatusOfMachines)"+this.url + '/getMachinesCountByStatus/'+merchantId)
    return this.http.get(this.url + '/getMachinesCountByStatus/'+merchantId, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getSoldItemDetails(merchantId: string): Observable<any> {
    console.log("Connecting...(getSoldItemDetails)"+this.url + '/getSoldItemDetails/'+merchantId)
    return this.http.get(this.url + '/getSoldItemDetails/'+merchantId, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
    
  getTransactionCountByStatus(transaction): Observable<any> {  
 
    console.log("Connecting..."+this.url + '/getTransactionCountByStatus/', JSON.stringify(transaction))
     return this.http.post(this.url + '/getTransactionCountByStatus/', JSON.stringify(transaction), this.httpOptions)
     .pipe(
       retry(1),
       catchError(this.handleError)
     )

  }

  getTotalMerchantRevenueByDate(merchantRevenue): Observable<any> {
    console.log("Connecting..."+this.url + '/getTotalMerchantRevenueByDate/', JSON.stringify(merchantRevenue))
    return this.http.post(this.url + '/getTotalMerchantRevenueByDate/', JSON.stringify(merchantRevenue), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
 }
  

   getMerchantTransactions(merchantId: string, machineId: string, noOfRows: number, pageNo: number): Observable<any> {
     console.log("Connecting..."+this.url + '/machineTransactions'+"/"+machineId)
     return this.http.get(this.url + '/machineTransactions'+"/"+machineId, this.httpOptions)
     .pipe(
       retry(1),
       catchError(this.handleError)
     )
   }

  totalMerchantTransactions(merchantId: string, machineId: string,): Observable<any> {
    console.log("Connecting..."+this.url + '/totalMerchantTransactions'+"/"+machineId)
    return this.http.get(this.url + '/totalMerchantTransactions'+"/"+machineId, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getMerchantMachineTransactions(merchantId: string, noOfRows: number, pageNo: number): Observable<any> {
    console.log("Connecting..."+this.url + '/merchantTransactions'+"/"+merchantId+"/"+noOfRows+"/"+pageNo)
    return this.http.get(this.url + '/merchantTransactions'+"/"+merchantId+"/"+noOfRows+"/"+pageNo, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

 totalMerchantMachineTransactions(merchantId: string): Observable<any> {
   console.log("Connecting..."+this.url + '/totalMerchantTransactions'+"/"+merchantId)
   return this.http.get(this.url + '/totalMerchantTransactions'+"/"+merchantId, this.httpOptions)
   .pipe(
     retry(1),
     catchError(this.handleError)
   )
 }

  getMerchantLockerTransactions(masterLockerId: string, noOfRows: number, pageNo: number): Observable<any> {
    console.log("Connecting..."+this.url + '/getMerchantLockerTransactions'+"/"+masterLockerId+"/"+noOfRows+"/"+pageNo)
    return this.http.get(this.url + '/getMerchantLockerTransactions'+"/"+masterLockerId+"/"+noOfRows+"/"+pageNo, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  
  totalMerchantLockerTransactions(masterLockerId: string): Observable<any> {
    console.log("Connecting..."+this.url + '/totalMerchantLockerTransactions'+"/"+masterLockerId)
    return this.http.get(this.url + '/totalMerchantLockerTransactions'+"/"+masterLockerId, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  
  totalLockerransactions(masterLockerId: string): Observable<any> {
    console.log("Connecting..."+this.url + '/totalLockerransactions'+"/"+masterLockerId)
    return this.http.get(this.url + '/totalLockerransactions'+"/"+masterLockerId, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  loadItemsOfSpring(spring): Observable<any> {
    console.log("Connecting..."+this.url + '/loadItemsOfSpring', JSON.stringify(spring))
    return this.http.post(this.url + '/loadItemsOfSpring', JSON.stringify(spring), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  addOrUpdateStock(item): Observable<any> {
    console.log("addOrUpdateStock: Connecting..."+this.url + '/stock', JSON.stringify(item))
    return this.http.post(this.url + '/stock', JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  
  
  addOrUpdateItem(item): Observable<any> {
    console.log("Connecting..."+this.url + '/addOrUpdateItem', JSON.stringify(item))
    return this.http.post(this.url + '/addOrUpdateItem', JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  
  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
