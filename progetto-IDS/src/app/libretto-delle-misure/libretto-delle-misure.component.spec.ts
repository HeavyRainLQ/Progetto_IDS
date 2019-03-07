import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrettoDelleMisureComponent } from './libretto-delle-misure.component';

describe('LibrettoDelleMisureComponent', () => {
  let component: LibrettoDelleMisureComponent;
  let fixture: ComponentFixture<LibrettoDelleMisureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrettoDelleMisureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrettoDelleMisureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
