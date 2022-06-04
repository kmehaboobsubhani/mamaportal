import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './Configuration.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationComponent,
    data: {
      title: 'Configuration',
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationRoutingModule {}
