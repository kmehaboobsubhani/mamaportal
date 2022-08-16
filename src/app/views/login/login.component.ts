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
  showErrorMessage=false;
  constructor(private service: DataService, private commonData: CommonDataService,
    private router: Router, 
    ) { }

  ngOnInit(): void {
  }
  
  onLogin() {
    //this.login.merchantId="ABC1234567"
    this.showErrorMessage = false;
    this.commonData.userId = this.login.userId;
    this.commonData.merchantId = this.login.merchantId;
    this.service.login(this.login).subscribe((resp: any) => {
      console.log("login Reponse:::" + JSON.stringify(resp));
      if(resp && resp.statusCode == 200) {
          console.log("Navingation... to home")
          this.router.navigate(["dashboard"]);
      }
      else{
        this.showErrorMessage = true;
      }    
    });
  }
}
