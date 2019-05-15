import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VikingsPage } from './vikings.page';

describe('VikingsPage', () => {
  let component: VikingsPage;
  let fixture: ComponentFixture<VikingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VikingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VikingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
