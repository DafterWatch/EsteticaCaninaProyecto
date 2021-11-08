import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosDetailsService, ProductosLista } from 'src/app/services/usuarios-details.service';

@Component({
  selector: 'app-menu-gerente',
  templateUrl: './menu-gerente.component.html',
  styleUrls: ['./menu-gerente.component.scss']
})
export class MenuGerenteComponent implements OnInit {

  constructor(public router: Router, private usuarioService:UsuariosDetailsService) { }
  idUsuarioCliente:any;
  idMascotaCliente:any;
  productosLista:ProductosLista[] = [];
  cantidadNueva:any = 0;
  ngOnInit(): void {
    this.idUsuarioCliente = sessionStorage.getItem("idUsuario");
    this.listarProductos();
  }
  listarProductos(){
    this.usuarioService.getProductosLista('').subscribe(
      res => {
        this.productosLista=<any>res;
      },
      err => {
        console.log(err);
      }
    );
  }
  cantidadNuevaObj:any={
    cantidad: 0
  }
  aumentarStock(idProd:any, cantActual:number){
    if(this.cantidadNueva >= 0){
      this.cantidadNuevaObj.cantidad = this.cantidadNueva + cantActual;
      this.modificar(idProd, this.cantidadNuevaObj);
      alert("Se ha agregado nuevos productos exitosamente");
      this.cantidadNuevaObj.cantidad = 0;
      this.cantidadNueva = 0;
      this.listarProductos();
    } else {
      alert("Solo se puede añadir cantidades positivas de productos");
    }
  }
  reducirStock(idProd:any, cantActual:number){
    if(this.cantidadNueva >= 0){
      if(cantActual - this.cantidadNueva >= 0){
        this.cantidadNuevaObj.cantidad = cantActual - this.cantidadNueva;
        this.modificar(idProd, this.cantidadNuevaObj);
        alert("Se ha reducido los productos exitosamente");
        this.cantidadNuevaObj.cantidad = 0;
        this.cantidadNueva = 0;
        this.listarProductos();
      } else {
        alert("La cantidad deseada de reduccion es mayor a la cantidad actual");
      }      
    } else {
      alert("Solo se puede reducir cantidades positivas de productos");
    }
  }
  modificar(idProd:any, cant:any){
    this.usuarioService.editProducto(idProd, cant).subscribe(
      res=>{
        console.log(res);        
      },
      err=>{
        console.log(err);
        
      }
    );
  }
}
