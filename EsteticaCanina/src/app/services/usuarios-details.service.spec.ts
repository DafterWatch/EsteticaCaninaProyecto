import { TestBed } from '@angular/core/testing';

import { UsuariosDetailsService } from './usuarios-details.service';

describe('UsuariosDetailsService', () => {
  let service: UsuariosDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
