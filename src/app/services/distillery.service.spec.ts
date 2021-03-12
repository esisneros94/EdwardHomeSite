import { TestBed } from '@angular/core/testing';
import { DistilleryService } from './distillery.service';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { Distillery } from 'src/assets/models/distillery';


describe('DistilleryService', () => {
  let dataService: DistilleryService
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DistilleryService],
      imports: [HttpClientTestingModule]
    })

  dataService = TestBed.get(DistilleryService);
  httpTestingController = TestBed.get(HttpTestingController);

  });

  it('should get all distilleries', () => {
    dataService.getAllDistilleries()
    .subscribe(
      ((data: Distillery[]) => expect(data.length).toBeGreaterThan(2))
    )
  });
});
