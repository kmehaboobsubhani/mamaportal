import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BadgeModule, ButtonModule, CardModule, FormModule, GridModule, SwitchModule, TabsetModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { MerchantRoutingModule } from './merchant-routing.module';
import { MerchantComponent } from './merchant.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationFormsRoutingModule } from '../forms/validation-forms/validation-forms-routing.module';
// Timepicker
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

// Datepicker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// Ng2-select
import { NgSelectModule } from '@ng-select/ng-select';

// CoreUI
import { AlertModule, TextMaskModule } from '@coreui/angular';

@NgModule({
  imports: [
    CommonModule,
    MerchantRoutingModule,
    CardModule,
    GridModule,
    IconModule,
    SwitchModule,
    PaginationModule,
    FormsModule,
    TabsetModule,
    BadgeModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ValidationFormsRoutingModule,
    GridModule,
    CardModule,
    ButtonModule,
    BadgeModule,
    FormModule,
    CommonModule,
    FormsModule,
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgSelectModule,
    CardModule,
    GridModule,
    ButtonModule,
    FormModule,
    IconModule,
    AlertModule,
    TextMaskModule,
  ],
  declarations: [MerchantComponent],
})
export class MerchantModule {}
