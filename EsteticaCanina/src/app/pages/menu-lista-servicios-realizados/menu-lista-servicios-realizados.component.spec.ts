import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListaServiciosRealizadosComponent } from './menu-lista-servicios-realizados.component';

describe('MenuListaServiciosRealizadosComponent', () => {
  let component: MenuListaServiciosRealizadosComponent;
  let fixture: ComponentFixture<MenuListaServiciosRealizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuListaServiciosRealizadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListaServiciosRealizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
