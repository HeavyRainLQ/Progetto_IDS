import { NgModule, ComponentRef } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  {path: 'graph', component: GraphComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  constructor( ){
  }
 
  
}
