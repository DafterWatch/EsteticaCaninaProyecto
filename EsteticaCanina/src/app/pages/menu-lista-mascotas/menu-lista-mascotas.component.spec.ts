import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListaMascotasComponent } from './menu-lista-mascotas.component';

describe('MenuListaMascotasComponent', () => {
  let component: MenuListaMascotasComponent;
  let fixture: ComponentFixture<MenuListaMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuListaMascotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListaMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
