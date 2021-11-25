import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuUpdateReservaComponent } from './pages/menu-update-reserva/menu-update-reserva.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormularioReservaComponent } from './pages/formulario-reserva/formulario-reserva.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuAddProductoComponent } from './pages/menu-add-producto/menu-add-producto.component';
import { MenuClientesComponent } from './pages/menu-clientes/menu-clientes.component';
import { MenuEmpleadosComponent } from './pages/menu-empleados/menu-empleados.component';
import { MenuEsteticoComponent } from './pages/menu-estetico/menu-estetico.component';
import { MenuGerenteComponent } from './pages/menu-gerente/menu-gerente.component';

import { MenuGerenteHistorialComponent } from './pages/menu-gerente-historial/menu-gerente-historial.component';

import { MenuListaEmpleadosComponent } from './pages/menu-lista-empleados/menu-lista-empleados.component';
import { MenuListaMascotasComponent } from './pages/menu-lista-mascotas/menu-lista-mascotas.component';
import { MenuListaProductosComponent } from './pages/menu-lista-productos/menu-lista-productos.component';
import { MenuModificarEmpleadoComponent } from './pages/menu-modificar-empleado/menu-modificar-empleado.component';
import { MenuRegistrarEmpleadosComponent } from './pages/menu-registrar-empleados/menu-registrar-empleados.component';
import { MenuRegistroMascotaComponent } from './pages/menu-registro-mascota/menu-registro-mascota.component';
import { MenuReservaClienteComponent } from './pages/menu-reserva-cliente/menu-reserva-cliente.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { GerenteListaReservasComponent } from './pages/gerente-lista-reservas/gerente-lista-reservas.component';
import { GerenteUpdateReservaComponent } from './pages/gerente-update-reserva/gerente-update-reserva.component';
import { MenuListaServiciosRealizadosComponent } from './pages/menu-lista-servicios-realizados/menu-lista-servicios-realizados.component';
import { MenuListaClientesComponent } from './pages/menu-lista-clientes/menu-lista-clientes.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'menuCliente',component:MenuClientesComponent},
  {path:'menuCajero',component:MenuEmpleadosComponent},
  {path:'menuEstetico',component:MenuEsteticoComponent},
  {path:'menuGerente',component:MenuGerenteComponent},

  {path:'menuHistorial',component:MenuGerenteHistorialComponent},

  {path:'menuRegistroMascota',component:MenuRegistroMascotaComponent},
  {path:'menuReservaCliente',component:MenuReservaClienteComponent},
  {path:'formuReserva',component:FormularioReservaComponent},
  {path:'menuRegistroEmpleado',component:MenuRegistrarEmpleadosComponent},
  {path:'menulistaMascotas',component:MenuListaMascotasComponent},
  {path:'menuModificarProductos',component:MenuListaProductosComponent},
  {path:'menuAddProducto',component:MenuAddProductoComponent},
  {path:'menuListaEmpleados',component:MenuListaEmpleadosComponent},
  {path:'menuUpdateEmpleado',component:MenuModificarEmpleadoComponent},
  {path:'menuUpdateReserva',component:MenuUpdateReservaComponent},
  {path:'menuGerenteReservas',component:GerenteListaReservasComponent},
  {path:'menuGerenteUpdateReservas',component:GerenteUpdateReservaComponent},
  {path:'menuListaServiciosRealizados',component:MenuListaServiciosRealizadosComponent},
  {path:'menuListaClientes',component:MenuListaClientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
