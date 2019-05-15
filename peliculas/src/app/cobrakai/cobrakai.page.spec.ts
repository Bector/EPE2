import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobrakaiPage } from './cobrakai.page';

describe('CobrakaiPage', () => {
  let component: CobrakaiPage;
  let fixture: ComponentFixture<CobrakaiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobrakaiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobrakaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
