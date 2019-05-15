import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotPage } from './got.page';

describe('GotPage', () => {
  let component: GotPage;
  let fixture: ComponentFixture<GotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
