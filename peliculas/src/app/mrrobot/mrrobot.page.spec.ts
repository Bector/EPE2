import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrrobotPage } from './mrrobot.page';

describe('MrrobotPage', () => {
  let component: MrrobotPage;
  let fixture: ComponentFixture<MrrobotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrrobotPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrrobotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
