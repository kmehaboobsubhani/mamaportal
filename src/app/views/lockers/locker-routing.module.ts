import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LockerComponent } from './locker.component';

const routes: Routes = [
  {
    path: '',
    component: LockerComponent,
    data: {
      title: 'Locker',
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LockerRoutingModule {}
