import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRegistroMascotaComponent } from './menu-registro-mascota.component';

describe('MenuRegistroMascotaComponent', () => {
  let component: MenuRegistroMascotaComponent;
  let fixture: ComponentFixture<MenuRegistroMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRegistroMascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRegistroMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
