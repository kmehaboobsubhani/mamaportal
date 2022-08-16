import { Component, Inject, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { CommonDataService } from '../../Common/common-data.service';
import { DataService } from '../../service/data.service';
import { ITableData } from '../tables/data-tables/data-tables.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'transactions.component.html',
  styleUrls: ['transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  tableData: any;
  returnedArray: ITableData[];
  machineId: string;
  currentPage = 1;
  page: number;
  totalRows = 0;
  totalRowsp = 0

  constructor(private service: DataService, private commonData: CommonDataService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.machineId = params.machineId;
        console.log(this.machineId);
      }
    );
    

    this.service.getMerchantTransactions(this.commonData.merchantId,this.machineId, 15, this.currentPage).subscribe((resp: any) => {
      console.log("getMerchantTransactions Reponse:::" + JSON.stringify(resp));
      this.totalRowsp = resp.length;
      console.log(this.totalRowsp);
      this.totalRows = this.totalRowsp;

      this.getTransactions();
    });

 
  }

  refreshPage() {
    this.page = 1;
    this.currentPage = this.page;
    this.getTransactions();
  }

  getTransactions() {
    if(this.totalRows > 0) {
      this.service.getMerchantTransactions(this.commonData.merchantId,this.machineId, 15, this.currentPage).subscribe((resp: any) => {
        console.log("getMerchantTransactions Reponse:::" + JSON.stringify(resp));
        this.totalRowsp = resp.length;
        console.log(this.totalRowsp);
        if (resp) {
          console.log("Txns...............................")
          this.tableData = resp;
          this.returnedArray = this.tableData.slice(0,8);
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
    this.getTransactions();
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
