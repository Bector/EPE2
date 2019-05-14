import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjuroPage } from './conjuro.page';

describe('ConjuroPage', () => {
  let component: ConjuroPage;
  let fixture: ComponentFixture<ConjuroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConjuroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjuroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
