import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiccionPage } from './ficcion.page';

describe('FiccionPage', () => {
  let component: FiccionPage;
  let fixture: ComponentFixture<FiccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiccionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
