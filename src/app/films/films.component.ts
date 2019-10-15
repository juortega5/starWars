import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: any[] = [];
  
  constructor(private dataService: DataService){
     this.dataService.getData('https://swapi.co/api/films/').subscribe(data => {
     this.films = data['results'];
   });
  }

 ngOnInit() {
 }

 getPage(ruta='https://swapi.co/api/films/')  {
   this.dataService.getData(ruta).subscribe(data => {
     this.films = data['results'];
     console.log(this.films);
 });}

}
