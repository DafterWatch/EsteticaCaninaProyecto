import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListaProductosComponent } from './menu-lista-productos.component';

describe('MenuListaProductosComponent', () => {
  let component: MenuListaProductosComponent;
  let fixture: ComponentFixture<MenuListaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuListaProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
