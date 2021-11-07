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