import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosDetailsService, MascotaRegistro, MascotaLista } from 'src/app/services/usuarios-details.service';

@Component({
  selector: 'app-menu-clientes',
  templateUrl: './menu-clientes.component.html',
  styleUrls: ['./menu-clientes.component.scss']
})
export class MenuClientesComponent implements OnInit {

  constructor(public router: Router, private usuarioService:UsuariosDetailsService) { }
  idUsuarioCliente:any;
  mascotasLista:MascotaLista[] = [];
  ngOnInit(): void {
    this.idUsuarioCliente = sessionStorage.getItem("idUsuario");
    this.listarMascotas();
  }
  reppass = '';
  mascotaRegistro:MascotaRegistro = {
    nombreMascota: '',
    edad: 0,
    sexo: '',
    raza: '',
    especie: '',
    idDuenio: ''
  }
  registrarNuevaMascota(){    
    if(this.mascotaRegistro.nombreMascota.length>0 &&
      this.mascotaRegistro.sexo.length>0 &&
      this.mascotaRegistro.raza.length>0 &&
      this.mascotaRegistro.especie.length>0)
      {
        this.mascotaRegistro.idDuenio = this.idUsuarioCliente;
        this.usuarioService.addMascotaRegistro(this.mascotaRegistro).subscribe();
        this.listarMascotas();
        alert("Se ha registrado una nueva mascota");
    } else {
      alert("Porfavor complete los campos vacios");
    }
  }
  listarMascotas(){
    this.usuarioService.getMascotasLista(this.idUsuarioCliente).subscribe(
      res => {
        this.mascotasLista=<any>res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
