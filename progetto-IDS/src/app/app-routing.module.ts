import { NgModule, ComponentRef } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { LogInComponent } from './log-in/log-in.component';
import { AreaDirettoreComponent } from './area-direttore/area-direttore.component';
import { LibrettoDelleMisureComponent } from './libretto-delle-misure/libretto-delle-misure.component';

const routes: Routes = [
  
  { path: 'login', component: LogInComponent },
    {path: 'area-direttore', component: AreaDirettoreComponent, children: [
    {
      path: 'graph',
      component: GraphComponent,
      outlet: 'reserved'
    },
    {
      path: 'librettoMisure',
      component: LibrettoDelleMisureComponent,
      outlet: 'reserved'
    },
    
  ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  constructor( ){
  }
 
  
}
