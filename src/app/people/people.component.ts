import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  
  peoples: any[] = [];
  
   constructor(private dataService: DataService){
    this.dataService.getData('https://swapi.co/api/people/').subscribe(data => {
      this.peoples = data['results'];
    });
   }

  ngOnInit() {
  }

}
