import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteUpdateReservaComponent } from './gerente-update-reserva.component';

describe('GerenteUpdateReservaComponent', () => {
  let component: GerenteUpdateReservaComponent;
  let fixture: ComponentFixture<GerenteUpdateReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenteUpdateReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenteUpdateReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
