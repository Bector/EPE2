import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SherlockPage } from './sherlock.page';

describe('SherlockPage', () => {
  let component: SherlockPage;
  let fixture: ComponentFixture<SherlockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SherlockPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SherlockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
