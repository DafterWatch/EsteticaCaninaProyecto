import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin, UsuariosDetailsService, UsuarioTipo } from 'src/app/services/usuarios-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, private serviceLogin:UsuariosDetailsService) { }
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
            if(this.usuarioTipo.cargo=="cliente"){            
              this.router.navigate(['menuCliente']);          
            } else if(this.usuarioTipo.cargo=="empleado"){
              this.router.navigate(['menuEmpleado']);
            } else if(this.usuarioTipo.cargo=="gerente"){
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
