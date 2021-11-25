import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListaClientesComponent } from './menu-lista-clientes.component';

describe('MenuListaClientesComponent', () => {
  let component: MenuListaClientesComponent;
  let fixture: ComponentFixture<MenuListaClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuListaClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
