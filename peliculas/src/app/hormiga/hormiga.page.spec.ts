import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HormigaPage } from './hormiga.page';

describe('HormigaPage', () => {
  let component: HormigaPage;
  let fixture: ComponentFixture<HormigaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HormigaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HormigaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
