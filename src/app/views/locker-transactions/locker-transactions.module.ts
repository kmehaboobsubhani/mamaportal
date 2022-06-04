import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, SwitchModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { LockerTransactionsRoutingModule } from './locker-transactions-routing.module';
import { LockerTransactionsComponent } from './locker-transactions.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LockerTransactionsRoutingModule,
    CardModule,
    GridModule,
    IconModule,
    SwitchModule,
    PaginationModule,
    FormsModule
  ],
  declarations: [LockerTransactionsComponent],
})
export class LockerTransactionsModule {}
