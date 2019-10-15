import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Route } from '@angular/router';

import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { PeopleComponent } from './people/people.component';

import { DataService } from './data.service';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';

const routes: Route[] = [
  {path:'',component: CanvasComponent},
  {path:'people',component: PeopleComponent},
  {path:'planets',component: PlanetsComponent},
  {path:'species',component: SpeciesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    PeopleComponent,
    PlanetsComponent,
    SpeciesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
