import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosLista, EmpleadosUpdate, UsuariosDetailsService } from 'src/app/services/usuarios-details.service';

@Component({
  selector: 'app-menu-modificar-empleado',
  templateUrl: './menu-modificar-empleado.component.html',
  styleUrls: ['./menu-modificar-empleado.component.scss']
})
export class MenuModificarEmpleadoComponent implements OnInit {

  constructor(public router: Router, private usuarioService:UsuariosDetailsService) { }

  empleadoLista:EmpleadosLista|any={
    idUsuario: '',
    nombreUsuario: '',
    telefono: '',
    correo: '',
    contra: '',
    idCargo: '',
    nombre: ''
  }
  empleadosUpdate:EmpleadosUpdate={
    nombreUsuario: '',
    telefono: '',
    correo: '',
    cargoId: '',
    contra: ''
  }
  reppass="";
  idUsuarioCliente:any;
  ngOnInit(): void {
    this.idUsuarioCliente = sessionStorage.getItem("idEmpleado");
    this.usuarioService.getUnEmpleadosLista(this.idUsuarioCliente).subscribe(
      res=>{
        this.empleadoLista = res
        this.reppass = this.empleadoLista.contra;
      },
      err=>{
        console.log(err);          
      }
    );
    
  }
  modificarEmpleado(){
    if(this.empleadoLista.nombreUsuario.length>0 && 
      this.empleadoLista.contra.length>0 && 
      this.reppass.length>0 && 
      this.empleadoLista.correo.length>0 &&
      this.empleadoLista.telefono.length>0)
      {
        if(this.empleadoLista.contra == this.reppass)
        {
          this.empleadosUpdate.nombreUsuario = this.empleadoLista.nombreUsuario;
          this.empleadosUpdate.telefono = this.empleadoLista.telefono;
          this.empleadosUpdate.correo = this.empleadoLista.correo;
          this.empleadosUpdate.cargoId = this.empleadoLista.idCargo;
          this.empleadosUpdate.contra = this.empleadoLista.contra;
          this.usuarioService.editEmpleado(this.idUsuarioCliente, this.empleadosUpdate).subscribe();
            alert("Se ha modificado al empleado");
            this.router.navigate(['/menuListaEmpleados']);
        } else{
            alert("Las contraseñas no coinciden");
        }   
        
    } else {
      alert("Porfavor complete los campos vacios");
    }
  }
}
