import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosDetailsService, UsuarioRegistro } from 'src/app/services/usuarios-details.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(public router: Router, private usuarioService:UsuariosDetailsService) { }

  ngOnInit(): void {
  }
  reppass = '';
  usuarioRegistro:UsuarioRegistro = {
    nombreUsuario: '',
    telefono: '',
    correo: '',
    cargo: 'cliente',
    contra: ''
  }
  registrarNuevoUsuario(){    
    if(this.usuarioRegistro.nombreUsuario.length>0 && 
      this.usuarioRegistro.contra.length>0 && 
      this.reppass.length>0 && 
      this.usuarioRegistro.correo.length>0 &&
      this.usuarioRegistro.telefono.length>0){
      if(this.usuarioRegistro.contra == this.reppass){
        this.usuarioService.addUsuarioRegistro(this.usuarioRegistro).subscribe();
        alert("Se ha registrado un nuevo usuario");
        this.router.navigate(['login']);
      } else {
        alert("Las contraseñas no coinciden");
      }
    } else {
      alert("Porfavor complete los campos vacios");
    }
  }
}
