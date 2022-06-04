import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule } from '@pascalhonegger/ng-datatable';
import { AddItemsComponent } from './addItems.component';
import { AddItemsRoutingModule } from './addItems-routing.module';

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
        AddItemsRoutingModule,
        DataTableModule,
        CardModule,
        GridModule,
        DataTableModule,
        FormModule,
        CommonModule,
        AddItemsRoutingModule,
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
  declarations: [AddItemsComponent],
})
export class AddItemsInitModule {}
