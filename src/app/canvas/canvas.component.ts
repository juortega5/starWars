import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  users: string[]=['stone','black'];
  saludo = "hey";
  constructor() { }

  ngOnInit() {
  }

}
