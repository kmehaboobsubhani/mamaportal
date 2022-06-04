import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { CommonDataService } from '../../Common/common-data.service';
import { DataService } from '../../service/data.service';
import { ITableData } from '../tables/data-tables/data-tables.service';


@Component({
  templateUrl: 'locker-transactions.component.html',
  styleUrls: ['locker-transactions.component.css'],
})
export class LockerTransactionsComponent implements OnInit {
  tableData: any;
  returnedArray: ITableData[];
  masterLockerId;
  currentPage = 1;
  page: number;
  totalRows = 0;
  constructor(private service: DataService, private commonData: CommonDataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { order: "popular" }
        this.masterLockerId = params.machineId;
        console.log(this.masterLockerId); // popular

        
    
    this.service.totalMerchantLockerTransactions(this.masterLockerId).subscribe((resp: any) => {
      console.log("totalMerchantLockerTransactions :"+resp);
      this.totalRows = resp;
      this.getLockerTransactions();
    });
      }
    );
  }

  
  refreshPage() {
    this.page = 1;
    this.currentPage = this.page;
    this.getLockerTransactions();
  }


  getLockerTransactions() {
    if(this.totalRows > 0) {
      this.service.getMerchantLockerTransactions(this.masterLockerId, 15, this.currentPage).subscribe((resp: any) => {
        console.log("getMerchantLockerTransactions Reponse:::" + JSON.stringify(resp));
        if (resp) {
          console.log("Txns...............................")
          this.tableData = resp;
          this.returnedArray = this.tableData.slice(0, 15);
        }
      });
    }
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.page = event.page;
    this.currentPage = this.page;
    this.returnedArray = this.tableData.slice(startItem, endItem);
    this.getLockerTransactions();
  }

  getBadge(status) {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'secondary';
      case 'Payment Success':
        return 'warning';
      case 'Banned':
        return 'danger';
      default:
        return 'primary';
    }
  }
}
