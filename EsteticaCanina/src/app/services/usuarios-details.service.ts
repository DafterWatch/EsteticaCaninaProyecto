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