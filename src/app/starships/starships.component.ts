import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  starships: any[] = [];
  
  constructor(private dataService: DataService){
     this.dataService.getData('https://swapi.co/api/starships/').subscribe(data => {
     this.starships = data['results'];
   });
  }

 ngOnInit() {
 }

 getPage(ruta='https://swapi.co/api/starships/')  {
   this.dataService.getData(ruta).subscribe(data => {
     this.starships = data['results'];
     console.log(this.starships);
 });}

}
