import { async } from '@angular/core/testing';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { CookieService } from './cookie.service';
describe('CookieService', () => {
  let obj;

  beforeEach(() => {
    obj = new CookieService();
  });

  it('should run #foo()', async () => {

    obj.foo();

  });

  it('should run #get()', async () => {

    obj.get({});

  });

});
