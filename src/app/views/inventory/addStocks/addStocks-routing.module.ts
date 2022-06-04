import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStocksComponent } from './addStocks.component';

const routes: Routes = [
  {
    path: '',
    component: AddStocksComponent,
    data: {
      title: 'Add Stocks',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddStocksRoutingModule {}
