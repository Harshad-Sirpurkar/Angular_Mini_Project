import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddBusComponent } from './add-bus/add-bus.component';
import { ViewBusComponent } from './view-bus/view-bus.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddBusComponent,
    ViewBusComponent,
    AdminDashComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
