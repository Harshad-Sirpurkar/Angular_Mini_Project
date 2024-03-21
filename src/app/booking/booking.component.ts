import { Component, OnInit } from '@angular/core';
import { BusService } from '../service/bus.service';
import { BusDetails } from '../model/bus-details';
import { HomeComponent } from '../home/home.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  constructor(private busService:BusService ,private fb:FormBuilder,
              private activeRoute:ActivatedRoute){}

  booking:FormGroup;
  busDetail:BusDetails;

  getsingledata;
  ngOnInit(): void {
   this.booking=this.fb.group({
    bookingId:[],
    passengerFullName:[],
    passengerAge:[],
    passengerContactNo:[],
    pickUpLocation:[],
    dropLocation:[],
    sitNumber:[]
   })
 
    this.getBusDetails();
  }
  getBusDetails()
  { let busid;
      this.activeRoute.paramMap.subscribe(
        param=>{
      busid = param.get("id");
        }
      )

      this.busService.getSingleData(busid).subscribe(
        (bus:BusDetails)=>this.busDetail=bus
      )

  }
  onSubmit()
  {
     this.busDetail.booking.push(this.booking.value);
     console.log(this.busDetail)
     this.busService.updateBusBooking(this.busDetail).subscribe();
     alert("Your booking in confrmed...!");
     this.booking.reset();
  }
 

}
