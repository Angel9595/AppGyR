import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/Interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu:Menu[]=[]


  constructor(private _Menuservice: MenuService) { }

  ngOnInit(): void {
    this.CargarMenu();
  }

 CargarMenu(){
  this._Menuservice.getMenu().subscribe(data=> {
  this.menu=data;
 })
}

}
