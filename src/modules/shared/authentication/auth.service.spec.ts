import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  }
];

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule.withRoutes(routes)]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
