import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListaEmpleadosComponent } from './menu-lista-empleados.component';

describe('MenuListaEmpleadosComponent', () => {
  let component: MenuListaEmpleadosComponent;
  let fixture: ComponentFixture<MenuListaEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuListaEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListaEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
