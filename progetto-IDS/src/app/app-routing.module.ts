import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { LogInComponent } from './log-in/log-in.component';
import { AreaRiservataComponent } from './area-riservata/area-riservata.component';
import { LibrettoDelleMisureComponent } from './libretto-delle-misure/libretto-delle-misure.component';

import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  { path: 'login', component: LogInComponent },
  {path: 'area-riservata', component: AreaRiservataComponent, children: [
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
    { //view modal
      path: 'modal',
      component: ModalComponent,
      outlet: 'reserved'
    },
    { //view modal
      path: 'home',
      component: HomeComponent,
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
