import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LockerTransactionsComponent } from './locker-transactions.component';

const routes: Routes = [
  {
    path: '',
    component: LockerTransactionsComponent,
    data: {
      title: 'LockerTransactions',
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LockerTransactionsRoutingModule {}
