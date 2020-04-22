import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AFolderComponent } from './a-folder.component';

describe('AFolderComponent', () => {
  let component: AFolderComponent;
  let fixture: ComponentFixture<AFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
