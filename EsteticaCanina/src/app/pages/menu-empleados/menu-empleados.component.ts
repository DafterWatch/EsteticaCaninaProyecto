import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistorialRegistro, ReservasLista, ServicioRealizadoRegistro, UsuariosDetailsService } from 'src/app/services/usuarios-details.service';


@Component({
  selector: 'app-menu-empleados',
  templateUrl: './menu-empleados.component.html',
  styleUrls: ['./menu-empleados.component.scss']
})
export class MenuEmpleadosComponent implements OnInit {

  constructor(public router: Router, private usuarioService:UsuariosDetailsService) { }
  idUsuarioCliente:any;
  nombreUsuario:any;
  reservaLista:ReservasLista = {
    idReserva: '',
    idUsuario: '',
    nombreUsuario: '',
    idMascota: '',
    nombreMascota: '',
    idServicio: '',
    precio:0,
    nombre: '',
    fecha: '',
    hora: ''
  };
  reservaListaAll:ReservasLista[] = [];
  ngOnInit(): void {
    this.idUsuarioCliente = sessionStorage.getItem("idUsuario");
    this.nombreUsuario = sessionStorage.getItem("nombreUsuario");
  }
  idReser:any = '';
  textoDescripcion:any = '';
  listarReservas(){
    this.usuarioService.getReservasHistorialLista(this.idReser).subscribe(
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
      this.textoDescripcion.length > 0
      ){
        this.servReaRegistr.idServicio = this.reservaLista.idServicio;
        this.servReaRegistr.fecha = this.reservaLista.fecha;
        this.servReaRegistr.idUsuario = this.reservaLista.idUsuario
        this.usuarioService.addServicioRealizado(this.servReaRegistr).subscribe(
          res => {
            this.historialRegistr.idUsuario = this.reservaLista.idUsuario;
            this.historialRegistr.descripcion = this.textoDescripcion;
            this.usuarioService.addHistorial(this.historialRegistr).subscribe();
          },
          err => {
            console.log(err);
          }
        );
        alert("Se registro correctamente");
    } else {
      alert("Tiene que haber buscado una reserva para concluir el servicio");
    }
  }
  servReaRegistr:ServicioRealizadoRegistro = {
    idServicio: '',
    fecha: '',
    idUsuario: ''
  }
  historialRegistr:HistorialRegistro = {
    idUsuario: '',
    descripcion: ''
  }
  buscarReserva(){
    if(this.idReser.length > 0){
      this.listarReservas();
    } else {
      alert("Escriba la id de la reserva");
    }
    
    //this.listarTodosReservas();
  }
}
