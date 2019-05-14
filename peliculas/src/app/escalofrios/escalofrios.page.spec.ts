import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalofriosPage } from './escalofrios.page';

describe('EscalofriosPage', () => {
  let component: EscalofriosPage;
  let fixture: ComponentFixture<EscalofriosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscalofriosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalofriosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
