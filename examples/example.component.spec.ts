// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component, PLATFORM_ID } from '@angular/core';
import { ExampleComponent } from './example.component';
import { AuthGuardService } from './auth-guard.service';
import { CookieService } from './cookie.service';
import { Router } from '@angular/router';

@Injectable()
class MockAuthGuardService {
  foo = function() {
    return {
      bar: {
        baz: function() {
          return {
            isLoggedIn: {}
          };
        }
      }
    };
  };
}

@Injectable()
class MockCookieService {
  get = function() {};
  foo = function() {
    return {
      bar: {
        baz: function() {}
      }
    };
  };
}

@Injectable()
class MockRouter {
  navigate() {};
}

@Directive({ selector: '[oneviewPermitted]' })
class OneviewPermittedDirective {
  @Input() oneviewPermitted;
}

@Pipe({name: 'translate'})
class TranslatePipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({name: 'phoneNumber'})
class PhoneNumberPipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({name: 'safeHtml'})
class SafeHtmlPipe implements PipeTransform {
  transform(value) { return value; }
}

describe('ExampleComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        ExampleComponent,
        TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
        OneviewPermittedDirective
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: AuthGuardService, useClass: MockAuthGuardService },
        { provide: CookieService, useClass: MockCookieService },
        { provide: 'PLATFORM_ID', useValue: 'browser' },
        { provide: Router, useClass: MockRouter }
      ]
    }).overrideComponent(ExampleComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function() {};
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    component.adjustmentsDetailsCms = component.adjustmentsDetailsCms || {};
    component.adjustmentsDetailsCms.location = {
      threshold: {}
    };
    component.router = component.router || {};
    component.router.events = observableOf({
      urlAfterRedirects: 'urlAfterRedirects'
    });
    component.menuEl = component.menuEl || {};
    component.menuEl.nativeElement = {
      highlightMenu: function() {}
    };
    component.ngOnInit();

  });

  it('should run #logout()', async () => {
    component.authGuardSvc = component.authGuardSvc || {};
    spyOn(component.authGuardSvc, 'logoff');
    component.logout();
    // expect(component.authGuardSvc.logoff).toHaveBeenCalled();
  });

  it('should run #changeLanguage()', async () => {
    component.cookie = component.cookie || {};
    spyOn(component.cookie, 'get');
    component.changeLanguage({});
    // expect(component.cookie.get).toHaveBeenCalled();
  });

  it('should run #onDeactivate()', async () => {

    component.onDeactivate();

  });

  // new test by ngentest
  it('should run #testFunction()', async () => {
    
    component.testFunction({});
    
  });
  // new test by ngentest
  it('should run #testFunction2()', async () => {
    spyOn(component, 'testFunction');
    component.testFunction2({});
    // expect(component.testFunction).toHaveBeenCalled();
    expect(true).to.be.Falsy(); //added as default assert
  });
});
