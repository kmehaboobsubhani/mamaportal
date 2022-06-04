import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, SwitchModule, FormModule, } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { StocksRoutingModule } from './stocks-routing.module';
import { StocksComponent } from './stocks.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';

// DataTable
import { DataTableModule } from '@pascalhonegger/ng-datatable';

import { DataFilterPipe } from './stocks-filter.pipe';


@NgModule({
  imports: [
    CommonModule,
    StocksRoutingModule,
    CardModule,
    GridModule,
    IconModule,
    SwitchModule,
    PaginationModule,
    FormsModule,
    FormModule,
    DataTableModule,
    HttpClientModule
  ],
  declarations: [StocksComponent, DataFilterPipe],
})
export class StocksModule {}
