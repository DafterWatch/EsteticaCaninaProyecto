import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuModificarEmpleadoComponent } from './menu-modificar-empleado.component';

describe('MenuModificarEmpleadoComponent', () => {
  let component: MenuModificarEmpleadoComponent;
  let fixture: ComponentFixture<MenuModificarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuModificarEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuModificarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
