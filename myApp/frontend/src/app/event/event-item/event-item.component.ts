import { Component, Input, OnInit } from '@angular/core';
import { EventDet } from 'src/app/eventDet.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  @Input() eventDet!:EventDet
  @Input() index!:number;
  constructor() { }

  ngOnInit(): void {
  }

}
