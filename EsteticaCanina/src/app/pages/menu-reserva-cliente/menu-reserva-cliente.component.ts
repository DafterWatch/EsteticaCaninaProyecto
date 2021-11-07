import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservasLista, UsuariosDetailsService } from 'src/app/services/usuarios-details.service';

@Component({
  selector: 'app-menu-reserva-cliente',
  templateUrl: './menu-reserva-cliente.component.html',
  styleUrls: ['./menu-reserva-cliente.component.scss']
})
export class MenuReservaClienteComponent implements OnInit {

  constructor(public router: Router, private usuarioService:UsuariosDetailsService) { }
  idUsuarioCliente:any;
  reservaLista:ReservasLista[] = [];
  ngOnInit(): void {
    this.idUsuarioCliente = sessionStorage.getItem("idUsuario");
    this.listarReservas();
  }
  listarReservas(){
    this.usuarioService.getReservasLista(this.idUsuarioCliente).subscribe(
      res => {
        this.reservaLista=<any>res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
