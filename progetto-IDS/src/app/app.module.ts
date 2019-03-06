import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';

import { GraphComponent } from './graph/graph.component';

import { AreaDirettoreComponent } from './area-direttore/area-direttore.component';
import { AreaDittaComponent } from './area-ditta/area-ditta.component';
import { AreaStazioneComponent } from './area-stazione/area-stazione.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    
    GraphComponent,
    
    AreaDirettoreComponent,
    AreaDittaComponent,
    AreaStazioneComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
