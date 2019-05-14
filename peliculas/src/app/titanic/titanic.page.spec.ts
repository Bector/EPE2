import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitanicPage } from './titanic.page';

describe('TitanicPage', () => {
  let component: TitanicPage;
  let fixture: ComponentFixture<TitanicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitanicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitanicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
