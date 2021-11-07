import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosDetailsService, MascotaRegistro, MascotaLista } from 'src/app/services/usuarios-details.service';

@Component({
  selector: 'app-menu-registro-mascota',
  templateUrl: './menu-registro-mascota.component.html',
  styleUrls: ['./menu-registro-mascota.component.scss']
})
export class MenuRegistroMascotaComponent implements OnInit {

  constructor(public router: Router, private usuarioService:UsuariosDetailsService) { }
  idUsuarioCliente:any;
  mascotasLista:MascotaLista[] = [];
  ngOnInit(): void {
    this.idUsuarioCliente = sessionStorage.getItem("idUsuario");
  }
  reppass = '';
  mascotaRegistro:MascotaRegistro = {
    nombreMascota: '',
    edad: 0,
    sexo: '',
    raza: '',
    especie: '',
    idDueno: ''
  }
  registrarNuevaMascota(){    
    if(this.mascotaRegistro.nombreMascota.length>0 &&
      this.mascotaRegistro.sexo.length>0 &&
      this.mascotaRegistro.raza.length>0 &&
      this.mascotaRegistro.especie.length>0)
      {
        this.mascotaRegistro.idDueno = this.idUsuarioCliente;
        console.log(this.mascotaRegistro);
        
        this.usuarioService.addMascotaRegistro(this.mascotaRegistro).subscribe();
        alert("Se ha registrado una nueva mascota");
        this.router.navigate(['menuCliente']);
    } else {
      alert("Porfavor complete los campos vacios");
    }
  }
}
