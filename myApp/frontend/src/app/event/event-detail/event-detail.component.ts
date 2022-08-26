import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventDet } from 'src/app/eventDet.model';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  eventDet!:EventDet;
  id!:number
  constructor(private eventSer:EventService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id']
      this.eventDet = this.eventSer.getEvents(this.id)
     
    })
  }
  bookTickets(bookingDet:EventDet){
    console.log("booked",bookingDet);
    
    
  }
  

}


