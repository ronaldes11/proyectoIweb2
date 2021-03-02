import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { PersonasCrudComponent } from './personas-crud/personas-crud.component';
import { EstadosCrudComponent } from './estados-crud/estados-crud.component';
import { ProyectosService } from './proyectos.service';
import { PersonasService } from './personas.service';
import { EstadosService } from './estados.service';
import { DashboardService } from './dashboard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReporteProyectoComponent } from './reporte-proyecto/reporte-proyecto.component';
import { ReportePersonaComponent } from './reporte-persona/reporte-persona.component';
import { ReporteEstadoComponent } from './reporte-estado/reporte-estado.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosCrudComponent,
    PersonasCrudComponent,
    EstadosCrudComponent,
    DashboardComponent,
    ReporteProyectoComponent,
    ReportePersonaComponent,
    ReporteEstadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProyectosService, PersonasService, EstadosService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
