import { Injectable } from '@angular/core';
import { Equipo } from '../Interfaces/equipos';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  LIST_EQUIP: Equipo[] = [
    {folio: 100, modelo:'cj4r', numSerie: 35000, clasificacion:"Garantia" },
    {folio: 101, modelo:"cj500", numSerie: 52201, clasificacion:"Reparacion" },
    {folio: 102, modelo:"cj4R", numSerie: 2345, clasificacion:"Garantia" },
    {folio: 103, modelo:"cj4r", numSerie: 34682, clasificacion:"Garantia" },
    {folio: 104, modelo:"cj4la", numSerie: 1090, clasificacion:"Reparacion" },
    {folio: 105, modelo:"cj4r", numSerie: 44000, clasificacion:"Garantia" },
    {folio: 106, modelo:"cj500", numSerie: 56500, clasificacion:"Reparacion" },
    {folio: 107, modelo:"cj4r", numSerie: 33560, clasificacion:"Garantia" },
    {folio: 108, modelo:"cj4r", numSerie: 38700, clasificacion:"Garantia" },
    {folio: 109, modelo:"cj4la", numSerie: 41876, clasificacion:"Reparacion" },
    {folio: 110, modelo:"cj4mb", numSerie: 34839, clasificacion:"Reparacion" },
  ];


  constructor() { }

  getEquipo(){
    return this.LIST_EQUIP.slice();
  }

  eliminarUsuario(index: number){
    this.LIST_EQUIP.splice(index,1)
  }

agregarEquipos(equipo: Equipo){
  this.LIST_EQUIP.unshift(equipo)
}

}
