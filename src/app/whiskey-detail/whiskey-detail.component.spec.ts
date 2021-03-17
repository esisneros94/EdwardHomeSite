import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiskeyDetailComponent } from './whiskey-detail.component';

describe('WhiskeyDetailComponent', () => {
  let component: WhiskeyDetailComponent;
  let fixture: ComponentFixture<WhiskeyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiskeyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiskeyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
