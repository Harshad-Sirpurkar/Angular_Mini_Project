import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusDetails } from '../model/bus-details';

@Injectable({
  providedIn: 'root'
})
export class BusService {


  constructor(private http:HttpClient) { }

  saveBusDetails(bus:BusDetails)
  {
     return  this.http.post('http://localhost:3000/bus',bus)
  }
  getBusDetails()
  {
   return this.http.get('http://localhost:3000/bus')
  }

  getSingleData(id:string)
  {
      return this.http.get('http://localhost:3000/bus/' +id)
  }
  updateBusBooking(bus:BusDetails)
  {
    return this.http.put('http://localhost:3000/bus/'+bus.id , bus);
  }
  deleteBusBooking(id:string)
  {
    return this.http.delete('http://localhost:3000/bus/'+id)
  }
  getBusOnDestination(fromLocation:string,toLocation:string)
  {
   return this.http.get('http://localhost:3000/bus?fromLocation='+fromLocation+'&toLocation='+toLocation);
  }
}
