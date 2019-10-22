import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperaioModalComponent } from './operaio-modal.component';

describe('OperaioModalComponent', () => {
  let component: OperaioModalComponent;
  let fixture: ComponentFixture<OperaioModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperaioModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperaioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
