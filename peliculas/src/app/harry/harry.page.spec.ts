import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarryPage } from './harry.page';

describe('HarryPage', () => {
  let component: HarryPage;
  let fixture: ComponentFixture<HarryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
