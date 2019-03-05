import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDittaComponent } from './area-ditta.component';

describe('AreaDittaComponent', () => {
  let component: AreaDittaComponent;
  let fixture: ComponentFixture<AreaDittaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaDittaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDittaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
