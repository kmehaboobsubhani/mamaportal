import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessTechnicalComponent } from './business-technical.component';

const routes: Routes = [
  {
    path: '',
    component: BusinessTechnicalComponent,
    data: {
      title: 'BusinessTechnical',
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessTechnicalRoutingModule {}
