import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  species: any[] = [];
  
  constructor(private dataService: DataService){
     this.dataService.getData('https://swapi.co/api/species/').subscribe(data => {
     this.species = data['results'];
   });
  }

 ngOnInit() {
 }

 getPage(ruta='https://swapi.co/api/species/')  {
   this.dataService.getData(ruta).subscribe(data => {
     this.species = data['results'];
     console.log(this.species);
 });}

}
