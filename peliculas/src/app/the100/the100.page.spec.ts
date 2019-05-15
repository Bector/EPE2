import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { The100Page } from './the100.page';

describe('The100Page', () => {
  let component: The100Page;
  let fixture: ComponentFixture<The100Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ The100Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(The100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
