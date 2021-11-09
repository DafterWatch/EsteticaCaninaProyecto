import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormularioReservaComponent } from './pages/formulario-reserva/formulario-reserva.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuClientesComponent } from './pages/menu-clientes/menu-clientes.component';
import { MenuEmpleadosComponent } from './pages/menu-empleados/menu-empleados.component';
import { MenuEsteticoComponent } from './pages/menu-estetico/menu-estetico.component';
import { MenuGerenteComponent } from './pages/menu-gerente/menu-gerente.component';
import { MenuListaMascotasComponent } from './pages/menu-lista-mascotas/menu-lista-mascotas.component';
import { MenuRegistrarEmpleadosComponent } from './pages/menu-registrar-empleados/menu-registrar-empleados.component';
import { MenuRegistroMascotaComponent } from './pages/menu-registro-mascota/menu-registro-mascota.component';
import { MenuReservaClienteComponent } from './pages/menu-reserva-cliente/menu-reserva-cliente.component';
import { RegistroComponent } from './pages/registro/registro.component';

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
  {path:'menuRegistroMascota',component:MenuRegistroMascotaComponent},
  {path:'menuReservaCliente',component:MenuReservaClienteComponent},
  {path:'formuReserva',component:FormularioReservaComponent},
  {path:'menuRegistroEmpleado',component:MenuRegistrarEmpleadosComponent},
  {path:'menulistaMascotas',component:MenuListaMascotasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
