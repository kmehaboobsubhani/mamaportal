import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpringsComponent } from './springs.component';

const routes: Routes = [
  {
    path: '',
    component: SpringsComponent,
    data: {
      title: 'Springs',
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpringsRoutingModule {}
