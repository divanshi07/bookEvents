import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventDet } from '../eventDet.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private router:Router,private eventSer:EventService) { }
  locationForm!:FormGroup
  locationForEvent=''
  isSearched=false;
  eventList:EventDet[]=[]
  ngOnInit(): void {
    // this.isSearched=false
    this.locationForm=new FormGroup({
      name:new FormControl(''),
      location:new FormControl('')
    })
  }
  submitForm(){
    console.log(this.locationForm.value);
    this.locationForEvent=this.locationForm.value.location;
    this.isSearched=true
    this.eventList=this.eventSer.getEventByVenue(this.locationForEvent)    
  }

}
