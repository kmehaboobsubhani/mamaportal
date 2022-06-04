import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, ModalModule, SwitchModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { SpringsRoutingModule } from './springs-routing.module';
import { SpringsComponent } from './springs.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SpringsRoutingModule,
    CardModule,
    GridModule,
    IconModule,
    SwitchModule,
    PaginationModule,
    FormsModule,
    ModalModule
  ],
  declarations: [SpringsComponent],
})
export class SpringsModule {}
