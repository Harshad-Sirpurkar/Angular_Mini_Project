import { Component, OnInit } from '@angular/core';
import { BusService } from '../../service/bus.service';
import { Router } from '@angular/router';
import { BusDetails } from '../../model/bus-details';

@Component({
  selector: 'app-view-bus',
  templateUrl: './view-bus.component.html',
  styleUrl: './view-bus.component.css'
})
export class ViewBusComponent implements OnInit {
  
  constructor(private busService:BusService, router:Router){}
  
  busdetails:BusDetails[]
  ngOnInit(): void {
    
    this.busService.getBusDetails().subscribe((data:any)=>
    {
      this.busdetails=data;
      console.warn(data)
    })
  }
  onDelete(id:string)
 {
  this.busService.deleteBusBooking(id).subscribe();
  window.location.reload();
 }
}
