import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEsteticoComponent } from './menu-estetico.component';

describe('MenuEsteticoComponent', () => {
  let component: MenuEsteticoComponent;
  let fixture: ComponentFixture<MenuEsteticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEsteticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEsteticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
