import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroContabilitaComponent } from './registro-contabilita.component';

describe('RegistroContabilitaComponent', () => {
  let component: RegistroContabilitaComponent;
  let fixture: ComponentFixture<RegistroContabilitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroContabilitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroContabilitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
