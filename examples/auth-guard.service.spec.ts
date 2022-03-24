import { async } from '@angular/core/testing';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { AuthGuardService } from './auth-guard.service';
describe('AuthGuardService', () => {
  let obj;

  beforeEach(() => {
    obj = new AuthGuardService();
  });

  it('should run #logoff()', async () => {

    obj.logoff();

  });

  it('should run #foo()', async () => {

    obj.foo();

  });

});
