import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, SwitchModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { LockerRoutingModule } from './locker-routing.module';
import { LockerComponent } from './locker.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LockerRoutingModule,
    CardModule,
    GridModule,
    IconModule,
    SwitchModule,
    PaginationModule,
    FormsModule
  ],
  declarations: [LockerComponent],
})
export class LockerModule {}
