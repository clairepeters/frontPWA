import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderAccordionComponent } from './folder-accordion.component';

describe('FolderAccordionComponent', () => {
  let component: FolderAccordionComponent;
  let fixture: ComponentFixture<FolderAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
