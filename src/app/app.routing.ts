import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent, EmailLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404',
    },
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500',
    },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page',
    },
  },
  {
    path: 'apps/email',
    component: EmailLayoutComponent,

    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/apps/email/email.module').then((m) => m.EmailModule),
      },
    ],
  },

  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule),
      },
      {
        path: 'merchant',
        loadChildren: () =>
          import('./views/merchant/merchant.module').then((m) => m.MerchantModule),
      },
      {
        path: 'configuration',
        loadChildren: () =>
          import('./views/configuration/configuration.module').then((m) => m.ConfigurationModule),
      },
      {
        path: 'machines',
        loadChildren: () =>
          import('./views/machines/machines.module').then((m) => m.MachinesModule),
      },
      {
        path: 'businesstechnical',
        loadChildren: () =>
          import('./views/business-technical/business-technical-module').then((m) => m.BusinessTechnicalModule),
      },
      {
        path: 'lockers',
        loadChildren: () =>
          import('./views/lockers/locker.module').then((m) => m.LockerModule),
      },
      
      {
        path: 'lockers/locks',
        loadChildren: () =>
          import('./views/locks/locks.module').then((m) => m.LocksModule),
      },
      {
        path: 'lockers/lockertransactions',
        loadChildren: () =>
          import('./views/locker-transactions/locker-transactions.module').then((m) => m.LockerTransactionsModule),
      },
      {
        path: 'machines/springs',
        loadChildren: () =>
          import('./views/springs/springs.module').then((m) => m.SpringsModule),
      },{
        path: 'machines/configuration',
        loadChildren: () =>
          import('./views/configuration/configuration.module').then((m) => m.ConfigurationModule),
      },{
        path: 'transactions',
        loadChildren: () =>
          import('./views/transactions/transactions.module').then((m) => m.TransactionsModule),
       },
    
      {
        path: 'stocks',
        loadChildren: () =>
          import('./views/inventory/stocks/stocks.module').then((m) => m.StocksModule),
      },
      
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule),
      },
      // {
      //   path: 'tables',
      //   loadChildren: () =>
      //     import('./views/tablestest/basic-tables/basic-tables.module').then(
      //       (m) => m.BasicTablesModule
      //     ),
      // },
      {
        path: 'items',
        loadChildren: () =>
          import('./views/inventory/items/items.module').then(
            (m) => m.DataTablesInitModule
          ),
      },
      // {
      //   path: 'products',
      //   loadChildren: () =>
      //     import('./views/inventory/products/products.module').then(
      //       (m) => m.DataTablesInitModules
      //     ),
      // },
       {
         path: 'items/addItems',
         loadChildren: () =>
           import('./views/inventory/addItems/addItems.module').then((m) => m.AddItemsInitModule),
       },
      {
        path: 'stocks/addStocks',
        loadChildren: () =>
          import('./views/inventory/addStocks/addStocks.module').then((m) => m.AddStocksInitModule),
      },

      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule),
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/chartjs/chartjs.module').then((m) => m.ChartjsModule),
      },
      {
        path: 'editors',
        loadChildren: () =>
          import('./views/editors/editors.module').then((m) => m.EditorsModule),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.FormsModule),
      },
      {
        path: 'google-maps',
        loadChildren: () =>
          import('./views/maps/maps.module').then((m) => m.MapsModule),
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then(
            (m) => m.NotificationsModule
          ),
      },
      {
        path: 'plugins',
        loadChildren: () =>
          import('./views/plugins/plugins.module').then((m) => m.PluginsModule),
      },
      {
        path: 'tables',
        loadChildren: () =>
          import('./views/tables/tables.module').then((m) => m.TablesModule),
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule),
      },
      {
        path: 'apps',
        loadChildren: () =>
          import('./views/apps/apps.module').then((m) => m.AppsModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
