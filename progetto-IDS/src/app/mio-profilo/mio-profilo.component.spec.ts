import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MioProfiloComponent } from './mio-profilo.component';

describe('MioProfiloComponent', () => {
  let component: MioProfiloComponent;
  let fixture: ComponentFixture<MioProfiloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MioProfiloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MioProfiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
