
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistorialRegistro, ReservasLista, ServicioRealizadoRegistro, UsuariosDetailsService, HistorialGerente,ServiciosRealizadosLista,HistorialUpdate} from 'src/app/services/usuarios-details.service';

@Component({
  selector: 'app-menu-gerente-historial',
  templateUrl: './menu-gerente-historial.component.html',
  styleUrls: ['./menu-gerente-historial.component.scss']
})
export class MenuGerenteHistorialComponent implements OnInit {

  constructor(public router: Router, private usuarioService:UsuariosDetailsService) { }
  idUsuarioCliente:any;
  nombreUsuario:any;
  reservaLista: ServiciosRealizadosLista = {
    idUsuario: '',
    idHistorial:'',
    idServicioRealizado:'',
    idServicio: '',
    nombre: '',
    fecha: '',
    nombreUsuario: '',
    descripcion:'',
    precio: 0
  };
  reservaListaAll:ServiciosRealizadosLista[] = [];

  historialUpdate:ServiciosRealizadosLista|any = {
  descripcion: ''
  }
  ngOnInit(): void {
    this.idUsuarioCliente = sessionStorage.getItem("idUsuario");
    this.nombreUsuario = sessionStorage.getItem("nombreUsuario");
  }
  idHis:any = '';
  listarReservas(){
    this.usuarioService.buscarHistorial(this.idHis).subscribe(
      res => {
        this.reservaLista=<any>res;
      },
      err => {
        console.log(err);
      }
    );
  }
  registrarServicio(){
    if(this.reservaLista.nombre.length > 0 &&
      this.reservaLista.fecha.length > 0 &&
      parseInt(this.reservaLista.idUsuario) > 0 &&
      this.reservaLista.nombreUsuario.length > 0 &&
      parseInt(this.reservaLista.idServicio) > 0 &&
      this.reservaLista.descripcion.length > 0
      ){
         this.historialUpdate.descripcion = this.reservaLista.descripcion;
          this.usuarioService.editHistorial(this.idUsuarioCliente, this.historialUpdate).subscribe();
            alert("Se ha modificado ");
    } else {
      alert("Tiene que haber buscado una reserva para concluir el servicio");
    }
  }

  buscarReserva(){
    if(this.idHis.length > 0){
      this.listarReservas();
    } else {
      alert("Escriba la id de la reserva");
    }

  }

}