import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule } from '@pascalhonegger/ng-datatable';
import { AddStocksComponent } from './addStocks.component';
import { AddStocksRoutingModule } from './addStocks-routing.module';

import { BadgeModule, ButtonModule, CardModule, FormModule, GridModule, SwitchModule, TabsetModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationFormsRoutingModule } from '../../forms/validation-forms/validation-forms-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        AddStocksRoutingModule,
        DataTableModule,
        CardModule,
        GridModule,
        DataTableModule,
        FormModule,
        CommonModule,
        AddStocksRoutingModule,
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
  declarations: [AddStocksComponent],
})
export class AddStocksInitModule {}
