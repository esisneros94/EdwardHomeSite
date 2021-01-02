import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiskeyDashboardComponent } from './whiskey-dashboard.component';

describe('WhiskeyDashboardComponent', () => {
  let component: WhiskeyDashboardComponent;
  let fixture: ComponentFixture<WhiskeyDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiskeyDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiskeyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
