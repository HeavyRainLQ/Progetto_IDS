import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaStazioneComponent } from './area-stazione.component';

describe('AreaStazioneComponent', () => {
  let component: AreaStazioneComponent;
  let fixture: ComponentFixture<AreaStazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaStazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaStazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
