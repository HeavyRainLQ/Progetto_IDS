import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';

import { GraphComponent } from './graph/graph.component';


import { MenuComponent } from './menu/menu.component';
import { LibrettoDelleMisureComponent } from './libretto-delle-misure/libretto-delle-misure.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AreaRiservataComponent } from './area-riservata/area-riservata.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    
    GraphComponent,
    
    AreaRiservataComponent,
   
    MenuComponent,
    LibrettoDelleMisureComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule

    
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
