import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomaPage } from './roma.page';

describe('RomaPage', () => {
  let component: RomaPage;
  let fixture: ComponentFixture<RomaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
