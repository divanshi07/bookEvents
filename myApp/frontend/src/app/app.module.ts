import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';

import { CreateEventComponent } from './event/create-event/create-event.component';
import { UpdateEventComponent } from './event/update-event/update-event.component';
import { DeleteEventComponent } from './event/delete-event/delete-event.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './home/nav/nav.component';
import { SlideshowComponent } from './home/slideshow/slideshow.component';
import { ShortenPipe } from './shorten.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventItemComponent } from './event/event-item/event-item.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';

import {HttpClientModule} from '@angular/common/http';
import { LocationComponent } from './location/location.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
    CreateEventComponent,
    UpdateEventComponent,
    DeleteEventComponent,
    FooterComponent,
    NavComponent,
    SlideshowComponent,
    ShortenPipe,
    EventItemComponent,
    EventDetailComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
