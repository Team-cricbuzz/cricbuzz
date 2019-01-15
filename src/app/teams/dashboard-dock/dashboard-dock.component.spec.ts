import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDockComponent } from './dashboard-dock.component';

describe('DashboardDockComponent', () => {
  let component: DashboardDockComponent;
  let fixture: ComponentFixture<DashboardDockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
