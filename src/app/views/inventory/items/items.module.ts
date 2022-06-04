import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule } from '@pascalhonegger/ng-datatable';
import { CardModule, FormModule, GridModule } from '@coreui/angular';
import { DataTablesComponent } from './items.component';
import { DataFilterPipe } from './items-filter.pipe';
import { DataTablesRoutingModule } from './items-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        DataTablesRoutingModule,
        DataTableModule,
        CardModule,
        GridModule,
        DataTableModule,
        FormModule,
    ],
  declarations: [DataTablesComponent, DataFilterPipe],
})
export class DataTablesInitModule {}
