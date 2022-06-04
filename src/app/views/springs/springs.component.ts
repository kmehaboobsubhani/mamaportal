import { Component, Inject, Input, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/utils/src';
import { DataService } from '../../service/data.service';
import { CommonDataService } from '../../Common/common-data.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  templateUrl: 'springs.component.html',
  styleUrls: ['springs.component.css'],
})
export class SpringsComponent implements OnInit {
  machineId: string;
  collapsed = false;
  togglerIcons = ['cil-chevron-top', 'cil-chevron-bottom'];
  public itemNames: any = [];
  public selItem : any;
  public filterQuery = '';

  totalItems: number = 64;
  currentPage: number = 4;
  smallnumPages: number = 10;

  maxSize: number = 5;
  bigTotalItems: number = 675;
  bigCurrentPage: number = 1;
  numPages: number = 0;

  currentPager: number = 4;
  loremText =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.';

  public springs: any = [];
  public levels: any = [];

  public sNo;
  public springName;
  public availability;
  public tempAvailability;
  public curLoadedQty = 0;
  public itemFromStockId;

  constructor(private service: DataService, private commonData: CommonDataService, private route: ActivatedRoute,
    private spinner: NgxSpinnerService) { }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  ngOnInit() {
    this.spinner.show();
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { order: "popular" }
        this.machineId = params.machineId;
        console.log(this.machineId); // popular
      }
    );

    this.itemNames = this.commonData.itemNames;

    this.service.getSprings(this.commonData.merchantId, this.machineId).subscribe((resp: any) => {
      console.log("getSprings Reponse:::" + JSON.stringify(resp));
      if (resp && resp.statusCode == 200) {
        console.log("Springs...............................")
        this.springs = resp.rowSprings;
        this.spinner.hide();
      }
    });
  }



  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }
  get currentIcon() {
    return this.collapsed ? this.togglerIcons[1] : this.togglerIcons[0];
  }

  springPop(sNo, sp, qty, stkid, name) {
    this.sNo = sNo;
    this.springName = sp;
    this.availability = qty;
    this.tempAvailability = qty;
    this.itemFromStockId = stkid;
    this.selItem = this.itemNames.find(i => i.itemName==name).itemFromStockId;
  }

  updateQty() {
    this.availability = this.tempAvailability + this.curLoadedQty;
  }

  updateSpring() {
    let spr = {
      "sNo": this.sNo,
      "springName": this.springName,
      "curLoadedQty": this.curLoadedQty,
      "availability": this.availability,
      "machineId": this.machineId,
      "itemFromStockId": this.selItem
    }
    this.service.loadItemsOfSpring(spr).subscribe((resp: any) => {
      console.log("loadItemsOfSpring Reponse:::" + JSON.stringify(resp));
      if (resp && resp.status == 200) {
       // console.log("Springs...............................");
        this.springs.forEach(sp => {
          console.log(">>>>>>>>>"+JSON.stringify(sp))
          let spr = sp.springs.find(s => s.springName == this.springName);
          if(spr) {
            spr.availability = this.availability;
            let itm = this.itemNames.find(i => i.itemFromStockId==this.selItem);
           // console.log("item..................."+JSON.stringify(itm))
            spr.name =  itm.itemName;
            spr.base64 = itm.icon;
          }
        });
      }
    });
  }

}
