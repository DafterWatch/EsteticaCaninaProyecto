import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUpdateReservaComponent } from './menu-update-reserva.component';

describe('MenuUpdateReservaComponent', () => {
  let component: MenuUpdateReservaComponent;
  let fixture: ComponentFixture<MenuUpdateReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuUpdateReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuUpdateReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
