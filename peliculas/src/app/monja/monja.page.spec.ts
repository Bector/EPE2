import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonjaPage } from './monja.page';

describe('MonjaPage', () => {
  let component: MonjaPage;
  let fixture: ComponentFixture<MonjaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonjaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonjaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
