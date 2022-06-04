import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BadgeModule, ButtonModule, CardModule, FormModule, GridModule, SwitchModule, TabsetModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ConfigurationRoutingModule } from './Configuration-routing.module';
import { ConfigurationComponent } from './Configuration.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationFormsRoutingModule } from '../forms/validation-forms/validation-forms-routing.module';



@NgModule({
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    CardModule,
    GridModule,
    IconModule,
    SwitchModule,
    PaginationModule,
    FormsModule,
    TabsetModule,
    BadgeModule,
    CommonModule,
    ReactiveFormsModule,
    ValidationFormsRoutingModule,
    GridModule,
    CardModule,
    ButtonModule,
    BadgeModule,
    FormModule,
  
  ],
  declarations: [ConfigurationComponent],
})
export class ConfigurationModule {}
