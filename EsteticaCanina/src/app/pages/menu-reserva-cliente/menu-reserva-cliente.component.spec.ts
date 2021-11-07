import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuReservaClienteComponent } from './menu-reserva-cliente.component';

describe('MenuReservaClienteComponent', () => {
  let component: MenuReservaClienteComponent;
  let fixture: ComponentFixture<MenuReservaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuReservaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuReservaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
