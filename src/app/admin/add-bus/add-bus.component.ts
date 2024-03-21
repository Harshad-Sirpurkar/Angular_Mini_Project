import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BusService } from '../../service/bus.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrl: './add-bus.component.css'
})
export class AddBusComponent implements OnInit {
  constructor(private fb:FormBuilder,private busService:BusService, private activateRoute:ActivatedRoute ) {}
  busDetails:FormGroup;

  ngOnInit(): void {
    
  this.busDetails=this.fb.group(
    {
        id:[],
        busNumber:[],
        busName:[],
        driverName:[],
        codriverName:[],
        sittingCapacity:[],
        fromLocation:[],
        toLocation:[],
        boardingTime:[],
        dropingTime:[],
        ticketPrice:[],
        
        booking:this.fb.array([

        ])
                         
    }
  );
  }
    onSubmit()
    {
      alert("hello")
      //this.busDetails.controls['id'].setValue(this.busDetails.controls['busNumber'].value)
      this.busService.saveBusDetails(this.busDetails.value).subscribe();
    }
    

}
