import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlLoginService } from 'src/app/services/control-login.service';
import { UsuarioLogin, UsuariosDetailsService, UsuarioTipo } from 'src/app/services/usuarios-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, private serviceLogin:UsuariosDetailsService, private loginControl:ControlLoginService) { }
  ngOnInit(): void {
  }
  usuarioLogin:UsuarioLogin={
    correo:'',
    contra:''
  }
  usuarioTipo:UsuarioTipo|any={
    idUsuario:'',
    nombreUsuario:'',
    telefono:'',
    correo:'',
    cargo:'',
    contra:''
  };
  iniciarSesion(){
    if(this.usuarioLogin.correo.length > 0 && this.usuarioLogin.contra.length > 0){
      this.serviceLogin.getUsuarioLogin(this.usuarioLogin).subscribe(
        res=>{
          if(res){
            this.usuarioTipo = res
            sessionStorage.setItem("idUsuario",this.usuarioTipo.idUsuario);
            sessionStorage.setItem("nombreUsuario",this.usuarioTipo.nombreUsuario);
            this.loginControl.disparador.emit({
              data:"si"
            });
            if(this.usuarioTipo.cargoId==1){            
              this.router.navigate(['menuCliente']);          
            } else if(this.usuarioTipo.cargoId==2){
              this.router.navigate(['menuCajero']);
            } else if(this.usuarioTipo.cargoId==3){
              this.router.navigate(['menuEstetico']);
            } else if(this.usuarioTipo.cargoId==4){
              this.router.navigate(['menuGerente']);
            }
          } else {
            alert("Correo o contraseña incorrectos");
          }
        },
        err=>{
          console.log(err);
        }
      );
    } else{
      alert("Complete los campos vacios");
    }
  }
}
