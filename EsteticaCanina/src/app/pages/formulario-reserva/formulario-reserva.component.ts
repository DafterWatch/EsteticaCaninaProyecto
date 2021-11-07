import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosLista, UsuariosDetailsService, ReservaRegistro, VerificarReserva } from 'src/app/services/usuarios-details.service';

@Component({
  selector: 'app-formulario-reserva',
  templateUrl: './formulario-reserva.component.html',
  styleUrls: ['./formulario-reserva.component.scss']
})
export class FormularioReservaComponent implements OnInit {

  constructor(public router: Router, private usuarioService:UsuariosDetailsService) { }
  idUsuarioCliente:any;
  idMascotaCliente:any;
  serviciosLista:ServiciosLista[] = [];
  fecha:any;
  hora:any;
  servicioNombre:any;
  servicioId:any;
  ngOnInit(): void {
    this.idUsuarioCliente = sessionStorage.getItem("idUsuario");
    this.idMascotaCliente = sessionStorage.getItem("idMascota");
    this.servicioNombre = "";
    this.listarServicios();
  }
  listarServicios(){
    this.usuarioService.getServiciosLista('').subscribe(
      res => {
        this.serviciosLista=<any>res;
      },
      err => {
        console.log(err);
      }
    );
  }
  reservarConfirmado(){
    if(this.servicioNombre.length > 0){
      if(this.fecha){
        if(this.hora){
          this.verificarReservaNueva();
        } else {
          alert("Seleccione una hora");
        }
      } else {
        alert("Seleccione una fecha");
      }
    } else {
      alert("Seleccione un servicio");
    }
  }
  reservaRegistroNuevo:ReservaRegistro = {
    idUsuario: '',
    idMascota: '',
    idServicio: '',
    fecha: '',
    hora: ''
  }
  verifReserva:VerificarReserva = {
    idUsuario: '',
    fecha: ''
  }
  verificarReservaNueva(){
    this.verifReserva.idUsuario = this.idUsuarioCliente;
    this.verifReserva.fecha = this.fecha;
    this.usuarioService.getValidarReserva(this.verifReserva).subscribe(
      res => {
      if(res){
        alert("Fecha no disponible, por favor seleccione otra fecha");
      } else {
        this.reservaRegis();
      }
    },
    err => {
      console.log(err);
    });
  }
  reservaRegis(){
    this.reservaRegistroNuevo.idUsuario = this.idUsuarioCliente;
    this.reservaRegistroNuevo.idMascota = this.idMascotaCliente;
    this.reservaRegistroNuevo.idServicio = this.servicioId;
    this.reservaRegistroNuevo.fecha = this.fecha;
    this.reservaRegistroNuevo.hora = this.hora;
    this.usuarioService.addReserva(this.reservaRegistroNuevo).subscribe();
    alert("Se ha reservado con exito");
    this.router.navigate(['menuCliente']);
  }
}
