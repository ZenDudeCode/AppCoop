import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CooperativaListComponent } from  './components/cooperativa-list/cooperativa-list.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CooperativaFormComponent } from './components/cooperativa-form/cooperativa-form.component';

const routes: Routes = [
  // ac'a se puede configurar a donde va por
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }, 
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'cooperativas',
    component: CooperativaListComponent
  },
  {
    path: 'crear-cooperativas',
    component: CooperativaFormComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
