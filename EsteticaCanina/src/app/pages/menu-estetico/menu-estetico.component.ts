import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservasLista, UsuariosDetailsService } from 'src/app/services/usuarios-details.service';

@Component({
  selector: 'app-menu-estetico',
  templateUrl: './menu-estetico.component.html',
  styleUrls: ['./menu-estetico.component.scss']
})
export class MenuEsteticoComponent implements OnInit {

  constructor(public router: Router, private usuarioService:UsuariosDetailsService) { }
  idUsuarioCliente:any;
  nombreUsuario:any;
  reservaLista:ReservasLista[] = [];
  ngOnInit(): void {
    this.idUsuarioCliente = sessionStorage.getItem("idUsuario");
    this.nombreUsuario = sessionStorage.getItem("nombreUsuario");
    this.listarReservas();
  }
  listarReservas(){
    this.usuarioService.getReservasAllLista('').subscribe(
      res => {
        this.reservaLista=<any>res;
      },
      err => {
        console.log(err);
      }
    );
  }
  modificar(id:any){
    sessionStorage.setItem("idReserva",id);
    this.router.navigate(['menuUpdateReserva']);
  }
  eliminar(id:any){
    this.usuarioService.deleteReserva(id).subscribe(
      res=>{
        this.listarReservas();
      },
      err=>{
        console.log(err);        
      }
    );
  }
}
