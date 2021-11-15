import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosLista, UsuariosDetailsService } from 'src/app/services/usuarios-details.service';

@Component({
  selector: 'app-menu-lista-empleados',
  templateUrl: './menu-lista-empleados.component.html',
  styleUrls: ['./menu-lista-empleados.component.scss']
})
export class MenuListaEmpleadosComponent implements OnInit {

  constructor(public router: Router, private usuarioService:UsuariosDetailsService) { }
  idUsuarioCliente:any;
  empleadosLista:EmpleadosLista[] = [];
  ngOnInit(): void {
    this.idUsuarioCliente = sessionStorage.getItem("idUsuario");
    this.listarEmpleados();
  }
  listarEmpleados(){
    this.usuarioService.getEmpleadosLista('').subscribe(
      res => {
        this.empleadosLista=<any>res;
      },
      err => {
        console.log(err);
      }
    );
  }
  modificar(id:any){
    sessionStorage.setItem("idEmpleado",id);
    this.router.navigate(['menuUpdateEmpleado']);
  }
  eliminar(id:any){
    this.usuarioService.deleteEmpleado(id).subscribe(
      res=>{
        this.listarEmpleados();
      },
      err=>{
        console.log(err);        
      }
    );
  }
}
