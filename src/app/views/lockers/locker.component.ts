import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/utils/src';
import { DataService } from '../../service/data.service';
import { CommonDataService } from '../../Common/common-data.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'locker.component.html',
  styleUrls: ['locker.component.css'],
})
export class LockerComponent implements OnInit {

  collapsed = false;
  togglerIcons = ['cil-chevron-top', 'cil-chevron-bottom'];

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

  public lockers: any = [];
  public levels: any = [];
  constructor(private service: DataService, private commonData: CommonDataService, 
    private router: Router) { }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  ngOnInit() {

    this.service.getLockers(this.commonData.merchantId).subscribe((resp: any) => {
      console.log("getLocker Reponse:::" + JSON.stringify(resp));
      if (resp && resp.statusCode == 200) {
        console.log("Locker...............................")
        this.lockers = resp.rowLockers;
        this.levels = resp.levels;
      }
    });
  }

  isConfigEnabled(machineId: string, config: string): boolean {
    if(this.lockers[0].lockers.find(m => m.machineId == machineId)) {
      let configs :string [] = this.lockers[0].lockers.find(m => m.machineId == machineId).configs;
    return configs.indexOf(config) != -1;
    }
    else return false;
  }

  getLevel(id: any): string {
    let lvl = 'NA';
    if (this.levels) {
      let l = this.levels.find(l => l.id == id);
      if (l) lvl = l.level;
    }
    return lvl;
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

  navigateToNewMac() {

    this.router.navigate(['/Locker/configuration'],{ queryParams:{} });
  }

  navigateToLock(machineId: string) {
    this.router.navigate(['/lockers/locks'],{ queryParams: {machineId} });
  }

  navigateToTransactions(machineId: string) {
    this.router.navigate(['/lockers/lockertransactions'],{ queryParams: {machineId} });
  }

  navigateToConfiguration(machineId: string) {
    this.router.navigate(['/Locker/configuration'],{ queryParams: {machineId} });
  }

}
