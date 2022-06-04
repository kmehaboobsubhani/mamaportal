import { DateFormatter } from "ngx-bootstrap/datepicker";

export interface Customer {
   address :  string ,
   billingPlan : number,
   companyName :  string ,
   country :  string ,
   gstNo :  string ,
   loginId :  string ,
   merchantId :  string ,
   merchantShortName :  string ,
   panNo :  string ,
   phone :  string ,
   email:string ,
   pin : number,
   primaryName : string,
   primaryPhone :  string ,
   primaryEmail:string ,
   secondaryName : string,
   secondaryPhone :  string ,
   secondaryEmail:string ,
   city : string,
   state : string,

   date: Date,
   modeofPayment:number,
   details:string,
   amount:number,

   paymentgateway:number,
   user:string,
   password:string,
   testapikey:string,
   productionapikey:string,
   callbackUrl:string,
   paymentNotificationUrl:string,
   successNotificationUrl:string,
   acceptNotificationUrl:string,
   remarksNotificationUrl:string,
    }