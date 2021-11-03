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
    MenuGerenteComponent
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
