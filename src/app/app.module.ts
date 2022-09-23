import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgxSpinnerModule } from "ngx-spinner";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers';
import { DefaultHeaderComponent } from './containers/default-layout/default-header/default-header.component';
import { DefaultHeaderDropdownAccountComponent } from './containers/default-layout/default-header-dropdown/default-header-dropdown-account.component';
import { DefaultHeaderDropdownMessagesComponent } from './containers/default-layout/default-header-dropdown/default-header-dropdown-messages.component';
import { DefaultHeaderDropdownNotificationsComponent } from './containers/default-layout/default-header-dropdown/default-header-dropdown-notifications.component';
import { DefaultHeaderDropdownTasksComponent } from './containers/default-layout/default-header-dropdown/default-header-dropdown-tasks.component';
import { DefaultAsideComponent } from './containers/default-layout/default-aside/default-aside.component';
import { EmailLayoutComponent } from './containers';
import { EmailHeaderComponent } from './containers/email-layout/email-header/email-header.component';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {DataService} from './service/data.service'
import { FormsModule  } from "@angular/forms";
import { AgGridModule } from 'ag-grid-angular';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

const APP_CONTAINERS = [
  DefaultLayoutComponent,
  DefaultHeaderComponent,
  DefaultHeaderDropdownAccountComponent,
  DefaultHeaderDropdownMessagesComponent,
  DefaultHeaderDropdownNotificationsComponent,
  DefaultHeaderDropdownTasksComponent,
  DefaultAsideComponent,
  EmailLayoutComponent,
  EmailHeaderComponent,
];

import {
  AlertModule,
  BadgeModule,
  ButtonModule,
  BreadcrumbModule,
  CardModule,
  CalloutModule,
  ChartModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  LayoutModule,
  ListGroupModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  SwitchModule,
  TabsetModule,
  TogglerModule,

} from '@coreui/angular';
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { CommonDataService } from './Common/common-data.service';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
    imports: [
        AlertModule,
        BadgeModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ButtonModule,
        BreadcrumbModule,
        CardModule,
        CalloutModule,
        ChartModule,
        CollapseModule,
        DropdownModule,
        GridModule,
        IconModule,
        IconSetModule.forRoot(),
        SharedModule,
        LayoutModule,
        ListGroupModule,
        ProgressModule,
        SidebarModule,
        SwitchModule,
        TabsetModule,
        TogglerModule,
        PerfectScrollbarModule,
        BsDropdownModule.forRoot(),
        // ToastrModule.forRoot(),
        // ToastContainerModule,
        FormModule,
        FormsModule,
        HttpClientModule,
        NgxSpinnerModule,
        AgGridModule.withComponents([]),
        ReactiveFormsModule,
        MatDialogModule, MatInputModule, 
        MatButtonModule, MatCardModule,
        MatFormFieldModule, MatDatepickerModule,
        MatNativeDateModule,MatAutocompleteModule,
        DateTimePickerModule

        
    ],
  exports: [SharedModule],

  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    //BusinessTechnicalComponent,
    //ItemTestComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    IconSetService,
    DataService,
    CommonDataService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
