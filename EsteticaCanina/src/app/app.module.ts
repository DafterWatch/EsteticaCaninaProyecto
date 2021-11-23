import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './sharepage/footer/footer.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { MenuClientesComponent } from './pages/menu-clientes/menu-clientes.component';
import { MenuEmpleadosComponent } from './pages/menu-empleados/menu-empleados.component';
import { MenuGerenteComponent } from './pages/menu-gerente/menu-gerente.component';
import { MenuEsteticoComponent } from './pages/menu-estetico/menu-estetico.component';

import { MenuRegistroMascotaComponent } from './pages/menu-registro-mascota/menu-registro-mascota.component';
import { MenuReservaClienteComponent } from './pages/menu-reserva-cliente/menu-reserva-cliente.component';
import { FormularioReservaComponent } from './pages/formulario-reserva/formulario-reserva.component';
import { MenuRegistrarEmpleadosComponent } from './pages/menu-registrar-empleados/menu-registrar-empleados.component';
import { MenuListaMascotasComponent } from './pages/menu-lista-mascotas/menu-lista-mascotas.component';
import { MenuListaProductosComponent } from './pages/menu-lista-productos/menu-lista-productos.component';
import { MenuAddProductoComponent } from './pages/menu-add-producto/menu-add-producto.component';
import { MenuListaEmpleadosComponent } from './pages/menu-lista-empleados/menu-lista-empleados.component';
import { MenuModificarEmpleadoComponent } from './pages/menu-modificar-empleado/menu-modificar-empleado.component';
import { MenuUpdateReservaComponent } from './pages/menu-update-reserva/menu-update-reserva.component';
import { GerenteListaReservasComponent } from './pages/gerente-lista-reservas/gerente-lista-reservas.component';
import { GerenteUpdateReservaComponent } from './pages/gerente-update-reserva/gerente-update-reserva.component';
import { MenuListaServiciosRealizadosComponent } from './pages/menu-lista-servicios-realizados/menu-lista-servicios-realizados.component';
import { MenuGerenteHistorialComponent } from './pages/menu-gerente-historial/menu-gerente-historial.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegistroComponent,
    FooterComponent,
    NavbarComponent,
    MenuClientesComponent,
    MenuEmpleadosComponent,
    MenuGerenteComponent,
    MenuEsteticoComponent,
    MenuRegistroMascotaComponent,
    MenuReservaClienteComponent,
    FormularioReservaComponent,
    MenuRegistrarEmpleadosComponent,
    MenuListaMascotasComponent,
    MenuListaProductosComponent,
    MenuAddProductoComponent,
    MenuListaEmpleadosComponent,
    MenuModificarEmpleadoComponent,
    MenuUpdateReservaComponent,
    GerenteListaReservasComponent,
    GerenteUpdateReservaComponent,
    MenuListaServiciosRealizadosComponent,
    MenuGerenteHistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
