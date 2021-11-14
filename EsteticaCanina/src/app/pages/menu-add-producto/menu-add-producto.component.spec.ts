import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAddProductoComponent } from './menu-add-producto.component';

describe('MenuAddProductoComponent', () => {
  let component: MenuAddProductoComponent;
  let fixture: ComponentFixture<MenuAddProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAddProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAddProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
