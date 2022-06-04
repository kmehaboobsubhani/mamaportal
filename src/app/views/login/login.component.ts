import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { CommonDataService } from '../../Common/common-data.service';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent {
  @HostBinding('class') cAppClass = 'c-app flex-row align-items-center';
  ABC1234567 = "ABC1234567"
  login: any = {};
  constructor(private service: DataService, private commonData: CommonDataService,
    //private spinner: NgxSpinnerService,
    private router: Router, 
    //private data: Data, 
    //private shareTitleService: ShareTitleService
    ) { }

  ngOnInit(): void {
  }
  
  onLogin() {
    //this.spinner.show();
    this.login.merchantId="ABC1234567"
    this.commonData.userId = this.login.userId;
    this.commonData.merchantId = this.login.merchantId;
    this.service.login(this.login).subscribe((resp: any) => {
      console.log("login Reponse:::" + JSON.stringify(resp));
      if(resp && resp.statusCode == 200) {
          console.log("Navingation... to home")
          this.router.navigate(["dashboard"]);
      }
     // this.spinner.hide();     
    });
  }
}
