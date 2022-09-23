import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { CommonDataService } from '../../Common/common-data.service';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-forgotPassword',
  templateUrl: 'forgotPassword.component.html',
  styleUrls: ['forgotPassword.component.css'],
})
export class ForgotPasswordComponent {
  @HostBinding('class') cAppClass = 'c-app flex-row align-items-center';
  ABC1234567 = "ABC1234567"
  forgotPassword: any = {};
  showErrorMessage=false;
  constructor(private service: DataService, private commonData: CommonDataService,
    private router: Router, 
    ) { }

  ngOnInit(): void {
  }
  
  onforgotPassword() {
    //this.forgotPassword.merchantId="ABC1234567"
    this.showErrorMessage = false;
    // this.commonData.userId = this.forgotPassword.userId;
    // this.commonData.merchantId = this.forgotPassword.merchantId;
    this.service.forgotPassword(this.forgotPassword).subscribe((resp: any) => {
      console.log("forgotPassword Reponse:::" + JSON.stringify(resp));
      if(resp && resp.statusCode == 200) {
          console.log("Navingation... to home")
          this.router.navigate(["machines"]);
      }
      else{
        this.showErrorMessage = true;
      }    
    });
  }
}
