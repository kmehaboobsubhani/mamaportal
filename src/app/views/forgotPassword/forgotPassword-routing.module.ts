import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgotPassword.component';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordComponent,
    data: {
      title: 'ForgotPassword',
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordRoutingModule {}
