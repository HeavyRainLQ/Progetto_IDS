import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDirettoreComponent } from './area-direttore.component';

describe('AreaDirettoreComponent', () => {
  let component: AreaDirettoreComponent;
  let fixture: ComponentFixture<AreaDirettoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaDirettoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDirettoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
