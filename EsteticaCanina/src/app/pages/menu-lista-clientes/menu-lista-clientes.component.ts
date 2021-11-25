import { Component, OnInit } from '@angular/core';
import { ClientesLista, UsuariosDetailsService } from 'src/app/services/usuarios-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lista-clientes',
  templateUrl: './menu-lista-clientes.component.html',
  styleUrls: ['./menu-lista-clientes.component.scss']
})
export class MenuListaClientesComponent implements OnInit {

  constructor(public router: Router, private usuarioService:UsuariosDetailsService) { }
  idUsuarioCliente:any;
  clientesLista:ClientesLista[] = [];
  ngOnInit(): void {
    this.idUsuarioCliente = sessionStorage.getItem("idUsuario");
    this.listarClientes();
  }
  listarClientes(){
    this.usuarioService.getClientesLista('').subscribe(
      res => {
        this.clientesLista=<any>res;
      },
      err => {
        console.log(err);
      }
    );
  }
  eliminar(id:any){
    this.usuarioService.editCliente(id, this.clienteUpdate).subscribe();
    alert("Se ha desactivado al cliente");
    this.listarClientes();
  }  
  clienteUpdate={
    estado: 'desactivo'
  }
}
