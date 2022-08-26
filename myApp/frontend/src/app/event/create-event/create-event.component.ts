import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventDet } from 'src/app/eventDet.model';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private eventSer:EventService) { }
  id:number=0;
  eventForm!:FormGroup
  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.eventForm = new FormGroup({
      'name':new FormControl('',Validators.required),
      'category':new FormControl('',Validators.required),
      'price':new FormControl('',Validators.required),
      'venue':new FormControl('',Validators.required),
      'date':new FormControl('',Validators.required),
      'details':new FormControl('',Validators.required),
      'imagePath':new FormControl('',Validators.required)

    })
  }
  submitForm(){
    
    let formVal=this.eventForm.value
    let newId = this.eventSer.getLength()
    let myObj=new EventDet(newId,formVal.name,formVal.date,formVal.venue,formVal.details,formVal.category,formVal.imagePath,formVal.price)
    this.eventSer.addEvent(myObj)
    this.router.navigate(['events'])
    
    
  }
  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route})

  }
}
