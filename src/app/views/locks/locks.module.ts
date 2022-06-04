
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, ModalModule, SwitchModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { LocksRoutingModule } from './locks-routing.module';
import { LocksComponent } from './locks.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LocksRoutingModule,
    CardModule,
    GridModule,
    IconModule,
    SwitchModule,
    PaginationModule,
    FormsModule,
    ModalModule
  ],
  declarations: [LocksComponent],
})
export class LocksModule {}
