import { Component,OnChanges,OnDestroy,OnInit,SimpleChanges } from '@angular/core';
import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { ITableData } from './dashboard';
import { CommonDataService } from '../../Common/common-data.service';
import { DataService } from '../../service/data.service';
import { FormGroup,FormBuilder,Validators,FormControl,AbstractControl,FormGroupName } from '@angular/forms';
import {DatePipe,formatDate} from '@angular/common';
@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  public radioModel = 'Month';
  error: any;
  public online: any = {};
  public offline: any = {};
  public data: ITableData;
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public brandBoxChart: IChartProps = {};
  public barChart: any = {};
  public doughnutChart: IChartProps = {};
  public statusMachineChart: any = {};
  public salesDetailsChart: any = {};
  public soldItemsChart: any = {};
  public transactionChart: any = {};
  public active: number;
  public inActive:number;
  public empList: Array<ITableData> = [];
  public jsons: any;
  public itemName:  ITableData[] 
  public totalQuantity:  ITableData[]
  public fromDate:string ;
  public toDate:string ;
  public fromDates:string ;
  public toDates:string ;
  public dateRangeForm: FormGroup;
  public inputvalue:number= 39;
  public simpleForm: FormGroup;
  public submitted = false;
  public formErrors: any;
  public totalRevenue: number ;
  public orderCreated : number ;
  public paymentSuccess : number ;
  public completed : number ;
  public dispenseFailed : number ;
  public transactionFailed : number ;
  public completedPercentage: number ;
  public failedPercentage: number ;
  public revenuePercentage: number ;
  public onlinepercentage: number ;
  public offlinepercentage: number ;
  public transactionArrayLength: number ;
  public revenueArrayLength: number ;
  public soldArrayLength: number ;
  public bhujiaSev : number ;
  public pepsi : number ;
  public chips : number ;
  public sanitaryNapkinSmall : number ;

  public bhujiaSevName : string ;
  public pepsiName : string ;
  public chipsName : string ;
  public sanitaryNapkinSmallName : string ;

  public bhujiaSevPercentage : number ;
  public pepsiPercentage : number ;
  public chipsPercentage : number ;
  public sanitaryNapkinSmallPercentage : number ;
  public transactionFromDate : string;
  public transactionTodate: string;
  public revenueFromDate : string;
  public revenueTodate: string;
  public flag: string;
  public monthOrYear: string;
  public isShown: boolean  ;
  public ispieShown: boolean ;
  public isHide: boolean  ;
  public isPieHide: boolean  ;
  public contactForm:FormGroup;
  public selectedOption: string;
  public printedOption: string;

  public isbhujiaSev: boolean ;
  public ispepsi: boolean ;
  public ischips: boolean ;
  public issanitaryNapkinSmall: boolean ;

  countries = [
    { value: "m", name: "Month" },
    { value: "Y", name: "Year" }
  ];

constructor(private chartsData: DashboardChartsData, private fb: FormBuilder, private service: DataService, private commonData: CommonDataService,) 
  {
    this.createForm();
    this.service.getAllStatusOfMachines(this.commonData.merchantId).subscribe(
      (data: ITableData) => {
        this.data = data; 
        this.MachineStatus(data)
        console.log(data);
      }, 
      (error) => (this.error = error) 
    );
    
    this.service.getSoldItemDetails(this.commonData.merchantId).subscribe(
      (data: any[]) => {
        this.soldArrayLength = data.length;
        this.soldItems(data)
        console.log(data);
      }, 
      (error) => (this.error = error) 
    );


    let dte = new Date();
    dte.setDate(dte.getDate() - 30);
    let currentDate = formatDate(new Date(), 'dd-MM-yyyy', 'en');
    var datePipe =  new DatePipe("en-US");
    let lastThirtyDaysDate = datePipe.transform(dte, 'dd-MM-yyyy');

    let transaction  =  {
      "fromDate": lastThirtyDaysDate,
      "merchantId": this.commonData.merchantId,
      "toDate"  : currentDate,      
    }
    this.onAddTransactionDate(transaction);

    let revenue = {
      "flag":"m",
      "merchantId": this.commonData.merchantId,   
    }
    this.onAddRevenueDate(revenue);
}

onAddTransactionDate(addItems : any={}){
  if(addItems.fromDate == null || addItems.fromDate == '' && addItems.toDate == null || addItems.toDate == '' )
  {
    var datePipe =  new DatePipe("en-US");
    this.fromDate = datePipe.transform(this.fromDate, 'dd-MM-yyyy');
    this.toDate = datePipe.transform(this.toDate, 'dd-MM-yyyy');
    let spr = {
      "fromDate": this.fromDate +" 00:00:00",
      "merchantId": this.commonData.merchantId,
      "toDate": this.toDate+" 23:59:59",     
    }
    this.service.getTransactionCountByStatus(spr).subscribe((resp: any) => {
      this.transactionArrayLength = resp.length;
      console.log("getTransactionCountByStatus Reponse:::" + JSON.stringify(resp));
      this.transactionFromDate = spr.fromDate;
      this.transactionTodate = spr.toDate;
      this.transactionCount(resp);
      if (resp && resp.status == 200) {      
        console.log(resp);
        console.log('resp length'+resp.length);
      }
      
    });
  }
  else{
    var datePipe =  new DatePipe("en-US");
    this.fromDate = datePipe.transform(this.fromDate, 'dd-MM-yyyy');
    this.toDate = datePipe.transform(this.toDate, 'dd-MM-yyyy');
    let spr = {
      "fromDate": addItems.fromDate +" 00:00:00",
      "merchantId": this.commonData.merchantId,
      "toDate": addItems.toDate+" 23:59:59",     
    }

    this.service.getTransactionCountByStatus(spr).subscribe((resp: any) => {
      this.transactionArrayLength = resp.length;
      console.log("getTransactionCountByStatus Reponse:::" + JSON.stringify(resp));
      this.transactionFromDate = spr.fromDate;
      this.transactionTodate = spr.toDate;
      this.transactionCount(resp);
      if (resp && resp.status == 200) {      
        console.log(resp);
        console.log('resp length'+resp.length);
      }     
    });
  }       
}

onAddRevenueDate(addItems : any={}){
  if(addItems.country == null || addItems.country == '')
  {
  let revenueDate = {
    "flag": "m",
    "merchantId": this.commonData.merchantId,
  }
  this.service.getTotalMerchantRevenueByDate(revenueDate).subscribe((resp: any) => {
    console.log("TotalMerchantRevenueByDate Reponse:::" + JSON.stringify(resp));
    this.revenueArrayLength = resp.length;
    this.flag = revenueDate.flag
    this.merchantRevenue(resp);
    if (resp && resp.status == 200) {
      console.log(resp);
    }      
  });
}
else{

  let revenueDate = {
    "flag": addItems.country,
    "merchantId": this.commonData.merchantId,    
  }

  this.service.getTotalMerchantRevenueByDate(revenueDate).subscribe((resp: any) => {
    console.log("TotalMerchantRevenueByDate Reponse:::" + JSON.stringify(resp));
    this.revenueArrayLength = resp.length;
    this.flag = revenueDate.flag
    this.merchantRevenue(resp);
    if (resp && resp.status == 200) {
      console.log(resp);
    }      
  });
}
  
}
 
MachineStatus(data: ITableData): void {
  debugger;
  this.active  = 0 ;
  this.inActive = 0 ;
  if(data.inActiveCount == null || data.inActiveCount == 0 || data.inActiveCount == NaN){
    data.inActiveCount = 0
  }
  
this.active =  data.activeCount;
this.inActive = data.inActiveCount;
this.onlinepercentage = (data.activeCount) /(data.activeCount + data.inActiveCount)*100 ;
this.offlinepercentage = (data.inActiveCount)/(data.activeCount + data.inActiveCount)*100; 
this.statusMachineChart.arbarChartLabels = [['Online'], ['Offline']];
this.statusMachineChart.arbarChartType = 'pie';
this.statusMachineChart.arbarChartLegend = true;
this.statusMachineChart.arbarChartData = [data.activeCount, data.inActiveCount];
this.statusMachineChart.arbarChartOptions = {}
this.statusMachineChart.pieChartPlugins  = [];
this.statusMachineChart.pieColor  = [
  {
    backgroundColor: [
      'rgba(50,205,50)',
      'rgba(255,69,0)',
    ]
  }
];
}

soldItems(data: any[]): void {
  this.bhujiaSev = 0 ;
  this.pepsi = 0 ;
  this.chips = 0 ;
  this.sanitaryNapkinSmall = 0 ;
  this.bhujiaSevPercentage = 0;
  this.pepsiPercentage = 0;
  this.chipsPercentage = 0;
  this.sanitaryNapkinSmallPercentage = 0;

 for (let i = 0; i < this.soldArrayLength; i++) {
  if(data[i].itemName == "Bhujia Sev"){
    this.bhujiaSev = data[i].totalQuantity;
    this.bhujiaSevName =data[i].itemName;
    this.isbhujiaSev = true;

  }
  else if(data[i].itemName == "Pepsi")
  {
    this.pepsi = data[i].totalQuantity ;
    this.pepsiName = data[i].itemName;
    this.ispepsi = true;

  }
  else if(data[i].itemName == "chips")
  {
    this.chips = data[i].totalQuantity;
    this.chipsName = data[i].itemName;
    this.ischips = true;
  }
  else
  {
    this.sanitaryNapkinSmall = data[i].totalQuantity ;
    this.sanitaryNapkinSmallName = data[i].itemName;
    this.issanitaryNapkinSmall = true;
  }
 }
 this.bhujiaSevPercentage = (this.bhujiaSev) /(this.bhujiaSev + this.pepsi + this.chips + this.sanitaryNapkinSmall )*100 ;
 this.pepsiPercentage = (this.pepsi) /(this.bhujiaSev + this.pepsi + this.chips + this.sanitaryNapkinSmall)*100 ;
 this.chipsPercentage = (this.chips) /(this.bhujiaSev + this.pepsi + this.chips + this.sanitaryNapkinSmall)*100 ;
 this.sanitaryNapkinSmallPercentage =(this.sanitaryNapkinSmall) / (this.bhujiaSev + this.pepsi + this.chips + this.sanitaryNapkinSmall)*100 ;

  this.soldItemsChart.doughnutChartLabels = [[this.bhujiaSevName],[this.pepsiName],[this.chipsName],[this.sanitaryNapkinSmallName]];
  this.soldItemsChart.doughnutChartType = 'doughnut';
  this.soldItemsChart.doughnutChartLegend = true;
  this.soldItemsChart.doughnutChartData =  [this.bhujiaSev,this.pepsi,this.chips,this.sanitaryNapkinSmall];
  this.soldItemsChart.doughnutChartOptions = {}
  this.soldItemsChart.pieColor  = [
    {
      backgroundColor: [
        ['rgba(242,77,65,255)'],
        ['rgba(49,182,77,255)'],
        ['rgba(252,203,86,255)'],
        ['rgba(104,223,237,255)']
      ]
    }
  ];
}

transactionCount(data: ITableData): void {
if(this.transactionArrayLength == 0 || this.transactionArrayLength == null){
  this.isShown = true;
  this.ispieShown = false;
}
else{
  this.isShown =  false;
  this.ispieShown = true;
}
    this.transactionFailed = 0;
    this.completed = 0;
    this.dispenseFailed = 0;
    this.orderCreated = 0;
    this.paymentSuccess = 0;
    this.completedPercentage = 0;
    this.failedPercentage = 0;

    for (let i = 0; i < this.transactionArrayLength; i++) {
    if(data[i].transactionStatus == "COMPLETED"){
      this.completed = data[i].count;
    }
    else if(data[i].transactionStatus == "DISPENSE FAILED")
    {
      this.dispenseFailed = data[i].count ;
    }
    else if(data[i].transactionStatus == "ORDER CREATED")
    {
      this.orderCreated = data[i].count;
    }
    else if(data[i].transactionStatus == "PAYMENT SUCCESS")
    {
      this.paymentSuccess = data[i].count;
    }
    else
    {
      this.transactionFailed = data[i].count ;
    }
    }
  if((this.dispenseFailed + this.completed) != 0){
      this.completedPercentage = ((this.completed)/(this.dispenseFailed + this.completed))*100;
      this.failedPercentage =  ((this.dispenseFailed)/(this.dispenseFailed + this.completed))*100;

  }
  else{
    this.completedPercentage = 0;
    this.failedPercentage =  0;
  }
      
  this.transactionChart.arbarChartLabels = ['Success','Failed'];
  this.transactionChart.arbarChartType = 'pie';
  this.transactionChart.arbarChartLegend = true;
  this.transactionChart.arbarChartData = [this.completed,this.dispenseFailed];
  this.transactionChart.arbarChartOptions = {
  }
  this.transactionChart.pieChartPlugins  = [];
  this.transactionChart.pieColor  = [
    {
      backgroundColor: [
        'rgba(34,139,34)',
        'rgba(255,0,0)',
        
      ]
    }
  ]


}

merchantRevenue(data: ITableData): void {
if(data['totalRevenueData'].week1 == 0 && this.flag == 'm' || data['totalRevenueData'].week1 == null && this.flag == 'm' || data['totalRevenueData'].DECEMBER2021 == 0 &&  this.flag == 'Y' || data['totalRevenueData'].DECEMBER2021 == null && this.flag == 'Y'){
  this.isHide = true;
  this.isPieHide = false;
}
else{
  this.isHide =  false;
  this.isPieHide = true;
}

    // if(data.totalRevenue == null ||data.totalRevenue == 0 ){
    //   this.totalRevenue = 0;
    //   this.revenuePercentage = 0;
    // }
    // else{
    //   this.totalRevenue = data.totalRevenue;
    //   this.revenuePercentage =  (data.totalRevenue / (data.totalRevenue + 0))*100;
    // }
    if(this.flag == 'm'){
      this.monthOrYear = "Month";
      this.salesDetailsChart.arbarChartLabels = ['week1','week2','week3','week4'];
      this.salesDetailsChart.arbarChartType = 'bar';
      this.salesDetailsChart.arbarChartLegend = true;
      this.salesDetailsChart.arbarChartData = [data['totalRevenueData']['week1'],data['totalRevenueData']['week2'],data['totalRevenueData']['week3'],data['totalRevenueData']['week4']];
      this.salesDetailsChart.arbarChartOptions = {

          scales: {
              xAxes: [{
                  barPercentage: 0.4
              }]
          }
      
      }
      this.salesDetailsChart.pieChartPlugins  = [];
      this.salesDetailsChart.pieColor  = [
        {
          backgroundColor: [
            'rgba(255,161,181,255)',
            'rgba(134,199,243,255)',
            'rgba(255,225,153,255)',
            'rgb(204,211,217)',
            'rgba(255,161,181,255)',
            
          ]
        }
        ];       
    }
    else{
      this.monthOrYear = "Year";
      this.salesDetailsChart.arbarChartLabels = ['DECEMBER2021','JANUARY2022','FEBRUARY2022','MARCH2022',];
      this.salesDetailsChart.arbarChartType = 'bar';
      this.salesDetailsChart.arbarChartLegend = true;
      this.salesDetailsChart.arbarChartData = [data['totalRevenueData'].DECEMBER2021,data['totalRevenueData'].JANUARY2022,data['totalRevenueData'].FEBRUARY2022,data['totalRevenueData'].MARCH2022,];
      this.salesDetailsChart.arbarChartOptions = {
        scales: {
          xAxes: [{
              barPercentage: 0.4
          }]
      }
      }
      this.salesDetailsChart.pieChartPlugins  = [];
      this.salesDetailsChart.pieColor  = [
        {
          backgroundColor: [
            'rgba(255,161,181,255)',
            'rgba(134,199,243,255)',
            'rgba(255,225,153,255)',
            'rgb(204,211,217)',
            'rgba(255,161,181,255)',
            
          ]
        }
      ];
    }
}
 
ngOnInit(): void {
  this.initCharts();
  this.dateRangeForm = this.fb.group({
    fromDate: new FormControl('', Validators.required),
    toDate: new FormControl('', Validators.required)
  });

  this.contactForm = this.fb.group({
    country: [null]
  });
}

initCharts(): void {
  this.mainChart = this.chartsData.mainChart;
  this.chart = this.chartsData.widgetChart;
  this.brandBoxChart = this.chartsData.brandBoxChart;
  this.barChart      = this.chartsData.barChart;
}

createForm() {
  this.simpleForm = this.fb.group(
    {
      fromDate: ['', [Validators.required]],
      toDate:['', [Validators.required]],
      fromDates: ['', [Validators.required]],
      toDates:['', [Validators.required]],
      flag:['', [Validators.required]],
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
  return this.simpleForm.status === 'VALID';
}

submit(){
  console.log(this.contactForm.value);
}
  
}







































  //   this.barChart.arbarChartLabels = ['Success','Failed','Order Created','Payment Success','Transaction Failed'];
  //   this.barChart.arbarChartType = 'bar';
  //   this.barChart.arbarChartLegend = false;
  //   this.barChart.arbarChartData = [this.completed,this.dispenseFailed,this.orderCreated,this.paymentSuccess,this.transactionFailed];
    
  //   this.barChart.arbarChartOptions = {
  //     scales: {
  //         xAxes: [{
  //             barPercentage: 0.7
  //         }]
  //     }
  // }
  //   this.barChart.pieChartPlugins  = [];
  //   this.barChart.pieColor  = [
  //     {
  //       backgroundColor: [
  //         'rgba(37,150,190,255)',
  //         'rgba(147,217,217,255)',
  //         'rgb(153,153,255)',
  //         'rgba(255,161,181,255)',
  //         'rgba(134,199,243,255)'
  //       ]
  //     }
  //   ]