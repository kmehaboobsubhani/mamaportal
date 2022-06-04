import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocksComponent } from './locks.component';

const routes: Routes = [
  {
    path: '',
    component: LocksComponent,
    data: {
      title: 'Locks',
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocksRoutingModule {}
