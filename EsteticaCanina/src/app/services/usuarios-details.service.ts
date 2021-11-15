import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosDetailsService {

  url = '/api'
  constructor(private http: HttpClient) { }

  getUsuarioLogin(equipo:UsuarioLogin){
    return this.http.post(this.url+'/getUsuariosLogin', equipo);
  }
  addUsuarioRegistro(usuario:UsuarioRegistro){
    return this.http.post(this.url+'/addUsuario',usuario);
  }
  addMascotaRegistro(mascota:MascotaRegistro){
    return this.http.post(this.url+'/addMascota',mascota);
  }
  getMascotasLista(id:string){
    return this.http.get(this.url+'/getMascotas/'+id);
  }
  getReservasLista(id:string){
    return this.http.get(this.url+'/getReservas/'+id);
  }
  getServiciosLista(id:string){
    return this.http.get(this.url+'/getServicios/'+id);
  }
  addReserva(reserva:ReservaRegistro){
    return this.http.post(this.url+'/addReserva',reserva);
  }   
  getValidarReserva(reserva:VerificarReserva){
    return this.http.post(this.url+'/getValidarReserva',reserva);
  }
  getProductosLista(id:string){
    return this.http.get(this.url+'/getProductos/'+id);
  }
  editProducto(id:string, equipo:any){
    return this.http.put(this.url+'/modificarProductos/'+id, equipo);
  }
  getReservasAllLista(id:string){
    return this.http.get(this.url+'/getReservasAll/'+id);
  }
  getReservasHistorialLista(id:string){
    return this.http.get(this.url+'/getReservasHistorial/'+id);
  }
  addServicioRealizado(reserva:ServicioRealizadoRegistro){
    return this.http.post(this.url+'/addServRealiz',reserva);
  }
  addHistorial(reserva:HistorialRegistro){
    return this.http.post(this.url+'/addHistorial',reserva);
  }   
  addProducto(producto:ProductoRegistro){
    return this.http.post(this.url+'/addProducto',producto);
  }
  deleteProducto(id:string){
    return this.http.delete(this.url+'/deleteProducto/'+id);
  }
  getEmpleadosLista(id:string){
    return this.http.get(this.url+'/getEmpleados/'+id);
  }
  deleteEmpleado(id:string){
    return this.http.delete(this.url+'/deleteEmpleado/'+id);
  }
  getUnEmpleadosLista(id:string){
    return this.http.get(this.url+'/getUnEmpleado/'+id);
  }
  editEmpleado(id:string, equipo:EmpleadosUpdate){
    return this.http.put(this.url+'/modificarEmpleado/'+id, equipo);
  }
}
export interface UsuarioLogin{
  correo:string;
  contra:string;
}
export interface UsuarioRegistro{
  nombreUsuario:string;
  telefono:string;
  correo:string;
  cargo:string;  
  contra:string;
}
export interface UsuarioTipo{
  idUsuario:string;
  nombreUsuario:string;
  telefono:string;
  correo:string;
  cargo:string;
  contra:string;
}
export interface MascotaRegistro{  
  nombreMascota:string; 
  edad:number; 
  sexo:string; 
  raza:string; 
  especie:string; 
  idDueno:string;
}
export interface MascotaLista{
  idMascota:number;
  nombreMascota:string; 
  edad:number; 
  sexo:string; 
  raza:string; 
  especie:string; 
  idDueno:string;
}
export interface ReservasLista{
  idReserva:string;
  idUsuario:string;
  nombreUsuario:string;
  idMascota:string;
  nombreMascota:string;
  idServicio:string; 
  nombre:string; 
  fecha:string; 
  hora:string;
}
export interface ServiciosLista{
  idServicio:string;
  nombre:string;
}
export interface ReservaRegistro{
  idUsuario:string;
  idMascota:string;
  idServicio:string;
  fecha:string;
  hora:string;
}
export interface VerificarReserva{
  idUsuario:string;
  fecha:string;
}
export interface ProductosLista{
  idProducto:string;
  nombreProducto:string;
  cantidad:number;
  precio:number;
}
export interface ServicioRealizadoRegistro{
  idServicio:string;
  fecha:string;
  idUsuario:string;
}
export interface HistorialRegistro{
  idUsuario:string;
  descripcion:string;
}
export interface ProductoRegistro{
  nombreProducto: string;
  cantidad: number;
  precio: number;
}
export interface EmpleadosLista{
  idUsuario: string;
  nombreUsuario: string;
  telefono: string;
  correo: string;
  contra: string;
  idCargo: string;
  nombre: string;
}
export interface EmpleadosUpdate{
  nombreUsuario: string;
  telefono : string;
  correo : string;
  cargoId : string;
  contra: string;
}