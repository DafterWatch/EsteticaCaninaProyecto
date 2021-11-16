import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteListaReservasComponent } from './gerente-lista-reservas.component';

describe('GerenteListaReservasComponent', () => {
  let component: GerenteListaReservasComponent;
  let fixture: ComponentFixture<GerenteListaReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenteListaReservasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenteListaReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
