import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuijaPage } from './ouija.page';

describe('OuijaPage', () => {
  let component: OuijaPage;
  let fixture: ComponentFixture<OuijaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuijaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuijaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
