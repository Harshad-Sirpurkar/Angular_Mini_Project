import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { ViewBusComponent } from './view-bus/view-bus.component';
import { BookingComponent } from '../booking/booking.component';

const routes: Routes = [
  {
    path:'',component:AdminDashComponent ,children:[
      {
        path:'add' ,component:AddBusComponent
      },
      {
        path:'view', component:ViewBusComponent
      },
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
