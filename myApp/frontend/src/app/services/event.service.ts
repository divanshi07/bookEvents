import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EventDet } from '../eventDet.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  myEventList:EventDet[]=[]
  eventChanged = new Subject<EventDet[]>()
  constructor(private http:HttpClient) { 
    this.http.get('http://localhost:3000/users/events').subscribe((data:any)=>{
      console.log(data);
 
     this.myEventList=data
     this.eventChanged.next(this.myEventList.slice())
    })
  }
  getEvent(){
    this.http.get('http://localhost:3000/users/events').subscribe((data:any)=>{
      console.log(data);
 
     this.myEventList=data
     this.eventChanged.next(this.myEventList.slice())
    })
    return this.myEventList.slice()
  }
  getEvents(id:number){
    return this.myEventList[id]
  }
  getEventByType(type:string){
    return this.myEventList.filter((item)=>{
      return item.eventType===type
    })
  }
  getEventByDate(theDate:Date){

  }
  getEventByVenue(loc:string){
    return this.myEventList.filter((item)=>{
      return item.eventVenue==loc;
    })
  }
  
  addEvent(event:EventDet){
    this.http.post('http://localhost:3000/users/event',event).subscribe((data)=>{
      if(data){
        this.eventChanged.next(this.myEventList.slice())
        console.log("successfullyadded");
      }
      else{
        console.log("could not add to db");
        
      }
    })    
  }
  getLength(){
    return this.myEventList.length
  }
}
