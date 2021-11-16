import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaRegistro, ServiciosLista, UsuariosDetailsService, VerificarReserva } from 'src/app/services/usuarios-details.service';

@Component({
  selector: 'app-gerente-update-reserva',
  templateUrl: './gerente-update-reserva.component.html',
  styleUrls: ['./gerente-update-reserva.component.scss']
})
export class GerenteUpdateReservaComponent implements OnInit {

  constructor(public router: Router, private usuarioService:UsuariosDetailsService) { }
  idUsuarioCliente:any;
  idMascotaCliente:any;
  idReserva:any;
  serviciosLista:ServiciosLista[] = [];
  fecha:any;
  hora:any;
  servicioNombre:any;
  servicioId:any;
  ngOnInit(): void {
    this.idReserva = sessionStorage.getItem("idReserva");
    this.servicioNombre = "";
    this.listarServicios();
    this.usuarioService.getUnReserva(this.idReserva).subscribe(
      res=>{
        this.reservaRegistroNuevo = res
        this.fecha = this.reservaRegistroNuevo.fecha;
        this.hora = this.reservaRegistroNuevo.hora;
      },
      err=>{
        console.log(err);          
      }
    );
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
  reservaRegistroNuevo:ReservaRegistro|any = {
    idUsuario: '',
    idMascota: '',
    idServicio: '',
    fecha: '',
    hora: ''
  }
  verifReserva:VerificarReserva = {
    fecha: '',
    hora: ''
  }
  verificarReservaNueva(){
    this.verifReserva.fecha = this.fecha;
    this.verifReserva.hora = this.hora;
    this.usuarioService.getValidarReserva(this.verifReserva).subscribe(
      res => {
      if(res){
        alert("Fecha no disponible o sin cambios en la fecha de la cita");
      } else {
        this.reservaRegis();
      }
    },
    err => {
      console.log(err);
    });
  }
  reservaRegis(){
    this.reservaRegistroNuevo.idServicio = this.servicioId;
    this.reservaRegistroNuevo.fecha = this.fecha;
    this.reservaRegistroNuevo.hora = this.hora;  
    this.usuarioService.editReserva(this.idReserva, this.reservaRegistroNuevo).subscribe();
    alert("Se ha modificado la reserva");
    this.router.navigate(['menuGerenteReservas']);
  }
}
