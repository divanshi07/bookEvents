import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:LocationComponent,children:[

      {
        path:':id',component:EventDetailComponent
      },

    ]
  },

  {
    path:'new',component:CreateEventComponent
  },
  {
    path:'events',
    component:EventComponent, children:[

      {
        path:':id',component:EventDetailComponent
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
