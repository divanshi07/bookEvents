import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventDet } from '../eventDet.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  subscription!:Subscription;
  eventList:EventDet[]=[]
  constructor(private eventSer:EventService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.eventSer.getEvent);
    this.subscription=this.eventSer.eventChanged.subscribe(
      (eventList:EventDet[])=>{
        this.eventList=eventList
      }
    )
    this.eventList=this.eventSer.getEvent()
   
    
  }


}
