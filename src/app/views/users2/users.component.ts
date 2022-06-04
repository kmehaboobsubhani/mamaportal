import { Component, Inject, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { CommonDataService } from '../../Common/common-data.service';
import { DataService } from '../../service/data.service';
import { ITableData } from '../tables/data-tables/data-tables.service';


@Component({
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
})
export class UsersComponent implements OnInit {
  tableData: any;
  returnedArray: ITableData[];

  currentPage = 1;
  page: number;

  constructor(private service: DataService, private commonData: CommonDataService) {}

  ngOnInit(): void {
    

    this.service.getMerchantUsers(this.commonData.merchantId).subscribe((resp: any) => {
      console.log("getMerchantUsers Reponse:::" + JSON.stringify(resp));
      if (resp) {
        console.log("Txns...............................")
        this.tableData = resp;
        this.returnedArray = this.tableData.slice(0, 15);
      }
    });
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.page = event.page;
    this.returnedArray = this.tableData.slice(startItem, endItem);
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
