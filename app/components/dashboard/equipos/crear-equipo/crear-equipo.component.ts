import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Equipo } from 'src/app/Interfaces/equipos';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent implements OnInit {

 form: FormGroup;

  Modelos: any[]=['CJ4R','CJ8K','CJ7S','CJ500','CJ4LA','CJ4R-HD','CJ4R-MB','CJ250']
  Clasificacion: any[]=['Garantia','Reparacion']


  constructor(private fb:FormBuilder, private equipo_service:EquipoService) {
    this.form = fb.group({
      folio:['',Validators.required],
      modelo:['',Validators.required],
      numeroSerie:['',Validators.required],
      clasificacion:['',Validators.required],
    })
  }


  ngOnInit(): void {
  }


agregarEquipo(){
console.log(this.form)
const equipo: Equipo = {
folio: this.form.value.folio,
modelo: this.form.value.modelo,
numSerie: this.form.value.numeroSerie,
clasificacion: this.form.value.clasificacion
}
console.log(equipo)

 this.equipo_service.agregarEquipos(equipo)

}

}
