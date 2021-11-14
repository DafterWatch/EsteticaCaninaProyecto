import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoRegistro, UsuariosDetailsService } from 'src/app/services/usuarios-details.service';

@Component({
  selector: 'app-menu-add-producto',
  templateUrl: './menu-add-producto.component.html',
  styleUrls: ['./menu-add-producto.component.scss']
})
export class MenuAddProductoComponent implements OnInit {

  constructor(public router: Router, private usuarioService:UsuariosDetailsService) { }
  idUsuarioCliente:any;
  ngOnInit(): void {
    this.idUsuarioCliente = sessionStorage.getItem("idUsuario");
  }
  productoRegistro:ProductoRegistro = {
    nombreProducto: '',
    cantidad: 0,
    precio: 0
  }

  registrarNuevoProducto(){    
    if(this.productoRegistro.nombreProducto.length>0 &&
      this.productoRegistro.cantidad>0 &&
      this.productoRegistro.precio>0)
      {
        this.usuarioService.addProducto(this.productoRegistro).subscribe();
        alert("Se ha registrado un nuevo producto");
        this.router.navigate(['menuModificarProductos']);
    } else {
      alert("Porfavor complete los campos vacios");
    }
  }
}
