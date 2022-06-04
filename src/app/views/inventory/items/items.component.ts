import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
  FormGroupName,
} from '@angular/forms';

import { ITableData } from '../../tables/data-tables/data-tables.service';
import { CommonDataService } from '../../../Common/common-data.service';
import { DataService } from '../../../service/data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ValidatorFn, ValidationErrors } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { ValidationFormsService } from './validation-forms.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  //providers: [DataTablesService],
})
export class DataTablesComponent  implements OnDestroy, OnInit, OnChanges {
  error: any;
  public data: ITableData;
  public filterQuery = '';
  public springs: any = [];
  public levels: any = [];

  public sNo;
  public springName;
  public availability;
  public tempAvailability;
  public curLoadedQty = 0;
  public itemFromStockId;
  showModal: boolean;
  customer:any = {};
  simpleForm: FormGroup;
  submitted = false;
  formErrors: any;
  msg:string;
  registerForm: FormGroup;
  entryForm: FormGroup;
  bodyText: string;
  ica:any = {};
  private _setTab: number;
  get setTab() {
    return this._setTab;
  }
  set setTab(value: number) {
    this._setTab = value || 0;
  }
  constructor(private fb: FormBuilder, private service: DataService, private commonData: CommonDataService, private spinner: NgxSpinnerService,
    private router: Router,) {
    this.createForm();
    this.setTab = 0;
    this.service.getAllItemsOfMerchant(this.commonData.merchantId).subscribe(
      (data: ITableData) => {
        setTimeout(() => {
          this.data = [...data]; //Refresh
        }, 1000);
      }, 
      (error) => (this.error = error) 
    );
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.name.length;
  }

  public getDate(regDate: string) {
    const date = new Date(regDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
  }



  showing() { 
    debugger;
    this.showModal = true;
  }
 
  hide()
  {
    debugger;
    this.showModal = false;
  }

  createForm() {
    this.simpleForm = this.fb.group(
      {
        cid: ['', [Validators.required]],
        crc: ['', [Validators.required]],
        ica: ['', [Validators.required]],

        asn: ['', [Validators.required]],
        iid: ['', [Validators.required]],
        itp: ['', [Validators.required]],
        spn: ['', [Validators.required]],
        imx: ['', [Validators.required]],
        key: ['', [Validators.required]],
        mid: ['', [Validators.required]],
        qmx: ['', [Validators.required]],

        merchantId: ['', [Validators.required]],
        companyName: ['', [Validators.required]],

        billingPlan: ['', [Validators.required]],
        panNo: ['', [Validators.required]],
        gstNo: ['', [Validators.required]],

        phone: ['', [Validators.required]],
        
        address: ['', [Validators.required]],

        country: ['', [Validators.required]],
        pincode: ['', [Validators.required]],
        
        primaryContact: ['', [Validators.required]],
        secondaryContact: ['', [Validators.required]],
        // email: ['', [Validators.required, Validators.email]],
      },

    );
  }

  get f() {
    return this.simpleForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.simpleForm.reset();
  }

  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.simpleForm.status === 'VALID';
  }

  onSubmit() {
    debugger;
    //console.warn(this.onValidate(), this.simpleForm.value);
    if (this.onValidate()) {
      console.warn(this.simpleForm.value);
      alert('SUCCESS!');
    }
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    // clearInterval(this.interval);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes, this.setTab);
  }

}
