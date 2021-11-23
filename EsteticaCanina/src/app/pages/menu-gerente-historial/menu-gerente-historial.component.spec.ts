import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGerenteHistorialComponent } from './menu-gerente-historial.component';

describe('MenuGerenteHistorialComponent', () => {
  let component: MenuGerenteHistorialComponent;
  let fixture: ComponentFixture<MenuGerenteHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuGerenteHistorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGerenteHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
