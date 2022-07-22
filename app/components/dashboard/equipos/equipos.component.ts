import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Equipo } from 'src/app/Interfaces/equipos';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  listEquipos: Equipo[]=[];

  displayedColumns: string[] = ['folio', 'modelo', 'numSerie', 'clasificacion','acciones'];
  dataSource!: MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _equipoService: EquipoService, private _snackBar: MatSnackBar) {

   }

  ngOnInit(): void {
    this.CargarEquipo();
  }

CargarEquipo(){
 this.listEquipos = this._equipoService.getEquipo();
 this.dataSource = new MatTableDataSource(this.listEquipos)
 }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarEquipo(index: number){
    console.log(index);
    this._equipoService.eliminarUsuario(index);
    this.CargarEquipo();

    this._snackBar.open('Usuario eliminado con exito!', '', {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
     })
  }

}
