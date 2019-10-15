import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: any[] = [];
  
  constructor(private dataService: DataService){
     this.dataService.getData('https://swapi.co/api/planets/').subscribe(data => {
     this.planets = data['results'];
   });
  }

 ngOnInit() {
 }

 getPage(ruta='https://swapi.co/api/planets/')  {
   this.dataService.getData(ruta).subscribe(data => {
     this.planets = data['results'];
     console.log(this.planets);
 });}

}
