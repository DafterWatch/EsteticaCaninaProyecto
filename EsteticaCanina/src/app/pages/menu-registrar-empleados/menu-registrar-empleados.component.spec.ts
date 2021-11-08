import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRegistrarEmpleadosComponent } from './menu-registrar-empleados.component';

describe('MenuRegistrarEmpleadosComponent', () => {
  let component: MenuRegistrarEmpleadosComponent;
  let fixture: ComponentFixture<MenuRegistrarEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRegistrarEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRegistrarEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
