import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlLoginService } from 'src/app/services/control-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private loginControl:ControlLoginService, private router:Router) { }
  inicioSesion:any;
  ngOnInit(): void {
    this.inicioSesion = false;
    this.loginControl.disparador.subscribe((data) => {
      if(data.data == "si"){
        this.inicioSesion = true;
      } else {
        this.inicioSesion = false;
      }
    });
  }
  cerrarSesion(){
    this.inicioSesion = false;
    this.router.navigate(['']);
  }
}
