import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { PeopleComponent } from './people/people.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
