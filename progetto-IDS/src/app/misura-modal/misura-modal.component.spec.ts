import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisuraModalComponent } from './misura-modal.component';

describe('MisuraModalComponent', () => {
  let component: MisuraModalComponent;
  let fixture: ComponentFixture<MisuraModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisuraModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisuraModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
