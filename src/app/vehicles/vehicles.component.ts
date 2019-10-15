import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles: any[] = [];
  
  constructor(private dataService: DataService){
     this.dataService.getData('https://swapi.co/api/vehicles/').subscribe(data => {
     this.vehicles = data['results'];
   });
  }

 ngOnInit() {
 }

 getPage(ruta='https://swapi.co/api/vehicles/')  {
   this.dataService.getData(ruta).subscribe(data => {
     this.vehicles = data['results'];
     console.log(this.vehicles);
 });}

}
