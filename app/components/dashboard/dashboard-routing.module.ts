import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CrearEquipoComponent } from './equipos/crear-equipo/crear-equipo.component';
import { EquiposComponent } from './equipos/equipos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'inicio', component: InicioComponent},
    {path: 'equipos', component: EquiposComponent},
    {path: 'reportes', component: ReportesComponent},
    {path: 'crear-equipo', component: CrearEquipoComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
