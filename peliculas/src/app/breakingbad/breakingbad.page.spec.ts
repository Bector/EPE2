import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakingbadPage } from './breakingbad.page';

describe('BreakingbadPage', () => {
  let component: BreakingbadPage;
  let fixture: ComponentFixture<BreakingbadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakingbadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakingbadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
