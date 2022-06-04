import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, SwitchModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { UsersRoutingModule } from './Users-routing.module';
import { UsersComponent } from './Users.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    CardModule,
    GridModule,
    IconModule,
    SwitchModule,
    PaginationModule,
    FormsModule
  ],
  declarations: [UsersComponent],
})
export class UsersModule {}
