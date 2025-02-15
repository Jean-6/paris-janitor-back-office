import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, provideHttpClient, withInterceptors} from "@angular/common/http";
import {RouterModule, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import { PasswordComponent } from './_features/password/password.component';
import { LoginComponent } from './_features/login/login.component';
import { DashboardComponent } from './_features/dashboard/dashboard.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ChartModule} from "primeng/chart";
import {PropertyListComponent} from "./_features/property-list/property-list.component";
import {AsideMenuComponent} from "./_features/shared/aside-menu/aside-menu.component";
import { PropertyAddComponent } from './_features/property-add/property-add.component';
import {InputNumberModule} from "primeng/inputnumber";
import {InputSwitchModule} from "primeng/inputswitch";
import {errorInterceptor} from "./_interceptors/errorInterceptor";
import {authInterceptor} from "./_interceptors/authInterceptor";


@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent,
    LoginComponent,
    PropertyListComponent,
    PropertyAddComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        RouterOutlet,
        CommonModule,
        ChartModule,
        DashboardComponent,
        AsideMenuComponent,
        InputNumberModule,
        InputSwitchModule,
    ],
  providers: [
    provideClientHydration(),
    provideHttpClient(
      withInterceptors([authInterceptor,errorInterceptor])
    )

  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
