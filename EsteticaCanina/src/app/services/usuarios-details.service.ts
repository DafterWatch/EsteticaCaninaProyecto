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
  getClientesLista(id:string){
    return this.http.get(this.url+'/getClientesLista/'+id);
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
  editCliente(id:string, equipo:any){
    return this.http.put(this.url+'/modificarCliente/'+id, equipo);
  }
  deleteReserva(id:string){
    return this.http.delete(this.url+'/deleteReserva/'+id);
  }
  getUnReserva(id:string){
    return this.http.get(this.url+'/getUnReserva/'+id);
  }
  editReserva(id:string, equipo:ReservaRegistro){
    return this.http.put(this.url+'/modificarReserva/'+id, equipo);
  }
  getServiciosRealizados(id:string){
    return this.http.get(this.url+'/getServiciosRealizados/'+id);
  }
  buscarHistorial(id:String){
    return this.http.get(this.url+'/getbuscarHistorial/'+id)
  }
  editHistorial(id:string, equipo:ServiciosRealizadosLista){
    return this.http.put(this.url+'/modificarHistorial/'+id, equipo);
  }
  editProductos(id:string, equipo:ProductoRegistro){
    return this.http.put(this.url+'/modificarTodoProductos/'+id, equipo);
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
  precio:number;
  nombre:string; 
  fecha:string; 
  hora:string;
}
export interface ServiciosLista{
  idServicio:string;
  nombre:string;
  precio: string;
}
export interface ReservaRegistro{
  idUsuario:string;
  idMascota:string;
  idServicio:string;
  fecha:string;
  hora:string;
}
export interface VerificarReserva{
  fecha:string;
  hora: string;
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
export interface ClientesLista{
  idUsuario: string;
  nombreUsuario: string;
  telefono: string;
  correo: string;  
  idCargo: string;
  contra: string;
  estado: string;
}
export interface EmpleadosUpdate{
  nombreUsuario: string;
  telefono : string;
  correo : string;
  cargoId : string;
  contra: string;
}
export interface ServiciosRealizadosLista{
  idServicioRealizado: string;
  idServicio: string;
  nombre: string;
  precio:number;
  fecha: string;
  idUsuario: string;
  nombreUsuario: string;
  idHistorial: string;
  descripcion: string;
}
export interface HistorialGerente{
  idUsuario: string;
  idHistorial: string;
  idServicioRealizado: string;
  idServicio: string;
  nombre: string;
  fecha: string;
  nombreUsuario: string;
  descripcion: string;
  idMascota: string;
  nombreMascota: string;
}
export interface HistorialUpdate{
  idHistorial: string;
  descripcion: string;
}
