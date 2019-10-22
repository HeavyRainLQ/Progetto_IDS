import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';

import {MatCheckboxModule,MatTableModule,MatDialogModule,MatIconModule } from '@angular/material';

import { GraphComponent } from './graph/graph.component';


import { MenuComponent } from './menu/menu.component';
import { LibrettoDelleMisureComponent } from './libretto-delle-misure/libretto-delle-misure.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AreaRiservataComponent } from './area-riservata/area-riservata.component';
import { GiornaleLavoriComponent } from './giornale-lavori/giornale-lavori.component';
import { BannerComponent } from './banner/banner.component';
import { MenuInizialeComponent } from './menu-iniziale/menu-iniziale.component';
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './home/home.component';
import { MioProfiloComponent } from './mio-profilo/mio-profilo.component';


import {SqlServiceService } from './sql-service.service';
import { EthcontractService } from './ethcontract.service';
import { HttpClientModule} from "@angular/common/http";
import { MisuraModalComponent } from './misura-modal/misura-modal.component';
import { AgGridModule } from 'ag-grid-angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { OperaioModalComponent } from './operaio-modal/operaio-modal.component';
import { RegistroContabilitaComponent } from './registro-contabilita/registro-contabilita.component';






@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    
    GraphComponent,
    
    AreaRiservataComponent,
   
    MenuComponent,
    LibrettoDelleMisureComponent,
    CalendarComponent,
    GiornaleLavoriComponent,
    BannerComponent,
    MenuInizialeComponent,
    ModalComponent,
    HomeComponent,
    MioProfiloComponent,
    MisuraModalComponent,
    OperaioModalComponent,
    RegistroContabilitaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    MDBBootstrapModule.forRoot(),

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AppComponent,SqlServiceService,EthcontractService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
