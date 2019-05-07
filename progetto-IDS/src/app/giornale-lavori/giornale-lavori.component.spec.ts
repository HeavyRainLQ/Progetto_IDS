import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiornaleLavoriComponent } from './giornale-lavori.component';

describe('GiornaleLavoriComponent', () => {
  let component: GiornaleLavoriComponent;
  let fixture: ComponentFixture<GiornaleLavoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiornaleLavoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiornaleLavoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
