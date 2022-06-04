import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddItemsComponent } from './addItems.component';

const routes: Routes = [
  {
    path: '',
    component: AddItemsComponent,
    data: {
      title: 'Add Items',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddItemsRoutingModule {}
