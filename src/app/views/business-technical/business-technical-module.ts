import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BadgeModule, ButtonModule, CardModule, FormModule, GridModule, SwitchModule, TabsetModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { BusinessTechnicalRoutingModule } from './business-technical-routing.module';
import { BusinessTechnicalComponent } from './business-technical.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationFormsRoutingModule } from '../forms/validation-forms/validation-forms-routing.module';

@NgModule({
  imports: [
    CommonModule,
BusinessTechnicalRoutingModule,
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
  ],
  declarations: [BusinessTechnicalComponent],
})
export class BusinessTechnicalModule {}
