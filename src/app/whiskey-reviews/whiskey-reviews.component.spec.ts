import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiskeyReviewsComponent } from './whiskey-reviews.component';

describe('WhiskeyReviewsComponent', () => {
  let component: WhiskeyReviewsComponent;
  let fixture: ComponentFixture<WhiskeyReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiskeyReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiskeyReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
