import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { 
    console.log('working');
  }

  /*getData(){
    return this.httpClient.get<Post[]>('https://swapi.co/api/');
  }*/

  getData(ruta='https://swapi.co/api/')  {
    console.log(ruta);
    return this.httpClient.get<Post[]>(ruta);
  }
}
