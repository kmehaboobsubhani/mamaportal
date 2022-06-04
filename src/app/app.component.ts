import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { IconSetService } from '@coreui/icons-angular';
import { brandSet, flagSet, freeSet } from '@coreui/icons';
import { CommonDataService } from './Common/common-data.service';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IconSetService],
})
export class AppComponent implements OnInit {
  public title
  public bgColor;
  public base64;
  constructor(private router: Router, public iconSet: IconSetService, private commonData: CommonDataService) {
    // iconSet singleton
    iconSet.icons = { ...freeSet, ...brandSet, ...flagSet };
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  get data(): string {
    let str = this.commonData.shareDataString;
    if(str) {
      return str;
    } else {
      return this.title;
    }
  }
  get base64Img(): string {
    let str = this.commonData.shareBase64;
    if(str) {
      return str;
    } else {
      return this.base64;
    }
  }

  get templateClr(): string {
    let str = this.commonData.shareColor;
    if(str) {
      return str;
    } else {
      return this.bgColor;
    }
  }
}
