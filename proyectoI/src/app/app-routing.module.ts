import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { PersonasCrudComponent } from './personas-crud/personas-crud.component';
import { EstadosCrudComponent } from './estados-crud/estados-crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReporteProyectoComponent } from './reporte-proyecto/reporte-proyecto.component';


const routes: Routes = [
  { path: 'proyectos', component: ProyectosCrudComponent },
  { path: 'dashboard/:id/proyectos-crud', component: DashboardComponent },
  { path: 'personas', component:  PersonasCrudComponent },
  { path: 'estados', component: EstadosCrudComponent },
  { path: 'reporte-proyecto/:id/proyectos-crud', component: ReporteProyectoComponent },
  { path: '', component: ProyectosCrudComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
