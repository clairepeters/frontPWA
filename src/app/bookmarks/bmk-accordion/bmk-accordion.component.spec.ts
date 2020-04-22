import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmkAccordionComponent } from './bmk-accordion.component';

describe('BmkAccordionComponent', () => {
  let component: BmkAccordionComponent;
  let fixture: ComponentFixture<BmkAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmkAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmkAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
