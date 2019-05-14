import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KingsmanPage } from './kingsman.page';

describe('KingsmanPage', () => {
  let component: KingsmanPage;
  let fixture: ComponentFixture<KingsmanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KingsmanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KingsmanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
