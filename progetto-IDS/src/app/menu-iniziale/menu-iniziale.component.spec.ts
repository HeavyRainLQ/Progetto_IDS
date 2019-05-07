import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInizialeComponent } from './menu-iniziale.component';

describe('MenuInizialeComponent', () => {
  let component: MenuInizialeComponent;
  let fixture: ComponentFixture<MenuInizialeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuInizialeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuInizialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
