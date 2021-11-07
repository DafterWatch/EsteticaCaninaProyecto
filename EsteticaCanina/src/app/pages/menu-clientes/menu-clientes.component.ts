import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosDetailsService, MascotaLista } from 'src/app/services/usuarios-details.service';

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
  registrarNuevaMascota(){    
    this.router.navigate(['menuRegistroMascota']);
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
