import { Component, Inject, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { CommonDataService } from '../../../Common/common-data.service';
import { DataService } from '../../../service/data.service';
import { ITableData } from '../../tables/data-tables/data-tables.service';
import { Observable } from 'rxjs';
import { ColDef } from 'ag-grid-community';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  currentPage = 1;
  page: number;
  public data: ITableData;
  public filterQuery = '';
  error: any;
  machineId: string;
  public itemNames: any = [];
  public selItem : any;
  public springs: any = [];

  constructor(private service: DataService, private commonData: CommonDataService,private spinner: NgxSpinnerService,
    private route: ActivatedRoute) {
      this.machineId = "MACH01";

      this.service.getMerchantTransactionsData(this.commonData.merchantId, this.machineId).subscribe((data: any) => {
        console.log("getSprings Reponse:::" + JSON.stringify(data));
        debugger;
          console.log("Springs...............................")
          this.springs ;
          //this.data = data.rowSprings.springs ;
          this.data = data.rowSprings[0].springs[0]
          //  console.log(this.springs);
          //  for (let i = 0; i < data.length; i++) {
          //  this.data.push(data[i]); 
          //  }
        debugger;
      });
    }

  ngOnInit() {

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