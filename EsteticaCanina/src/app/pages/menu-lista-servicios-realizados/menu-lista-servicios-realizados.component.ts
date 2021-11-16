import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosRealizadosLista, UsuariosDetailsService } from 'src/app/services/usuarios-details.service';

@Component({
  selector: 'app-menu-lista-servicios-realizados',
  templateUrl: './menu-lista-servicios-realizados.component.html',
  styleUrls: ['./menu-lista-servicios-realizados.component.scss']
})
export class MenuListaServiciosRealizadosComponent implements OnInit {

  constructor(public router: Router, private usuarioService:UsuariosDetailsService) { }
  idUsuarioCliente:any;
  nombreUsuario:any;
  serviciosRealizadosLista:ServiciosRealizadosLista[] = [];
  ngOnInit(): void {
    this.idUsuarioCliente = sessionStorage.getItem("idUsuario");
    this.nombreUsuario = sessionStorage.getItem("nombreUsuario");
    this.listarReservas();
  }
  listarReservas(){
    this.usuarioService.getServiciosRealizados('').subscribe(
      res => {
        this.serviciosRealizadosLista=<any>res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
