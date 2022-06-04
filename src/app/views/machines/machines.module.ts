import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, SwitchModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { MachinesRoutingModule } from './machines-routing.module';
import { MachinesComponent } from './machines.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MachinesRoutingModule,
    CardModule,
    GridModule,
    IconModule,
    SwitchModule,
    PaginationModule,
    FormsModule
  ],
  declarations: [MachinesComponent],
})
export class MachinesModule {}
