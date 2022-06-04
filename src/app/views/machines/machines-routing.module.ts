import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MachinesComponent } from './machines.component';

const routes: Routes = [
  {
    path: '',
    component: MachinesComponent,
    data: {
      title: 'Machines',
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachinesRoutingModule {}
