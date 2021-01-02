import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiskeyReviewFormComponent } from './whiskey-review-form.component';

describe('WhiskeyReviewFormComponent', () => {
  let component: WhiskeyReviewFormComponent;
  let fixture: ComponentFixture<WhiskeyReviewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiskeyReviewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiskeyReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
