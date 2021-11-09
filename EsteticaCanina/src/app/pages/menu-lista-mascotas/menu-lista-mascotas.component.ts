import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosDetailsService, MascotaLista } from 'src/app/services/usuarios-details.service';

@Component({
  selector: 'app-menu-lista-mascotas',
  templateUrl: './menu-lista-mascotas.component.html',
  styleUrls: ['./menu-lista-mascotas.component.scss']
})
export class MenuListaMascotasComponent implements OnInit {

  constructor(public router: Router, private usuarioService:UsuariosDetailsService) { }
  idUsuarioCliente:any;
  mascotasLista:MascotaLista[] = [];

  ngOnInit(): void {
    this.idUsuarioCliente = sessionStorage.getItem("idUsuario");
    this.listarMascotas();
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
  reservar(idMas:any){
    sessionStorage.setItem('idMascota',idMas);
    this.router.navigate(['formuReserva']);
  }
}
