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
import { VehiclesComponent } from './vehicles/vehicles.component';
import { StarshipsComponent } from './starships/starships.component';
import { FilmsComponent } from './films/films.component';

const routes: Route[] = [
  {path:'',component: CanvasComponent},
  {path:'people',component: PeopleComponent},
  {path:'planets',component: PlanetsComponent},
  {path:'species',component: SpeciesComponent},
  {path:'vehicles',component: VehiclesComponent},
  {path:'starships',component: StarshipsComponent},
  {path:'films',component: FilmsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    PeopleComponent,
    PlanetsComponent,
    SpeciesComponent,
    VehiclesComponent,
    StarshipsComponent,
    FilmsComponent
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
