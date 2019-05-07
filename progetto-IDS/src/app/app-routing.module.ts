import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { LogInComponent } from './log-in/log-in.component';
import { AreaRiservataComponent } from './area-riservata/area-riservata.component';
import { LibrettoDelleMisureComponent } from './libretto-delle-misure/libretto-delle-misure.component';
import { GiornaleLavoriComponent } from './giornale-lavori/giornale-lavori.component';
import { BannerComponent } from './banner/banner.component';
import { MenuInizialeComponent } from './menu-iniziale/menu-iniziale.component';

import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  
  { path: 'login', component: LogInComponent },
  {path: 'area-riservata', component: AreaRiservataComponent, children: [
    {
      path: 'menu-iniziale',
      component: MenuInizialeComponent,
      outlet: 'reserved'
  },
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
    {
      path: 'giornaleLavori',
      component: GiornaleLavoriComponent,
      outlet: 'reserved'
    },
    {
      path: 'banner',
      component: BannerComponent,
    },

    { //view modal
      path: 'modal',
      component: ModalComponent,
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
