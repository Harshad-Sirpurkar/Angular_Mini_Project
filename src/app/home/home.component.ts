import { Component, OnInit } from '@angular/core';
import { BusDetails } from '../model/bus-details';
import { BusService } from '../service/bus.service';
import { Router } from '@angular/router';
import { from, window } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private bookTicket:BusService, private router:Router){}

  ticketBook:BusDetails[]=[]
  fromLocation:string;
  toLocation:string;
  ngOnInit(): void {
    
    this.bookTicket.getBusDetails().subscribe((data:any)=>
    {
      this.ticketBook=data;
    })
  }
  onBooking(id:string)
  {
    this.router.navigateByUrl("/booking/"+id)
  }
  searchBus()
  {
     this.bookTicket.getBusOnDestination(this.fromLocation,this.toLocation).subscribe(
      (data:BusDetails[])=>{
       this.ticketBook=data;
      }
     );
  }



}
