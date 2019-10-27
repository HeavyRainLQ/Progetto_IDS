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
import { OperaioModalComponent } from './operaio-modal/operaio-modal.component';
import { HomeComponent } from './home/home.component';
import { MioProfiloComponent } from './mio-profilo/mio-profilo.component';
import { MisuraModalComponent } from './misura-modal/misura-modal.component';
import { RegistroContabilitaComponent } from './registro-contabilita/registro-contabilita.component';
import { SalComponent } from './sal/sal.component';
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
      path: 'registroContabilita',
      component: RegistroContabilitaComponent,
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
    { //view modal
      path: 'modal_misura',
      component: MisuraModalComponent,
      outlet: 'reserved'
    },

    { //view modal
      path: 'modal_operaio',
      component: OperaioModalComponent,
      outlet: 'reserved'
    },



    { //view HOME
      path: 'home',
      component: HomeComponent,
      outlet: 'reserved'
    },
    { //view mio_profilo
      path: 'mio_profilo',
      component: MioProfiloComponent,
      outlet: 'reserved'
    },
    { //view sal
      path: 'sal',
      component: SalComponent,
      outlet: 'reserved'
    },
  ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule { 
  
  constructor( ){
  }
 
  
}
