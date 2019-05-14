import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbsPage } from './dbs.page';

describe('DbsPage', () => {
  let component: DbsPage;
  let fixture: ComponentFixture<DbsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
