import { TestBed } from '@angular/core/testing';
import { DistilleryService } from './distillery.service';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { Distillery } from 'src/assets/models/distillery';


describe('DistilleryService', () => {
  let dataService: DistilleryService
  let httpTestingController: HttpTestingController

  let distilleries: Distillery[] =
  [
    {"distilleryId": 1, "name": "Glenfiddich", "country": "Scotland", "region": "Speyside", "foundedYear": 1886, "founderName": "William Grant", "latitude": 57.4550, "longitude": -3.1290, "websiteLink": "https://www.glenfiddich.com/us/", "logoPictureName": "glenfiddich.jpg"},
    {"distilleryId": 2, "name": "Jack Daniels\"", "country": "United States", "region": "Southeast", "foundedYear": 1875, "founderName": "Jasper Newton \"Jack\" Daniel", "latitude": 35.2840, "longitude": -86.3680, "websiteLink": "https://www.jackdaniels.com/en-us", "logoPictureName": "jackdaniels.jpg"}
  ]

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
      ((data) => expect(data.length).toBe(2))
    )

    const req = httpTestingController.expectOne('../../assets/distillery.json');
    expect(req.request.method).toEqual("GET");
    req.flush(distilleries); // This is what will actually fire our test for our observable to subscribe to.

    httpTestingController.verify();
  });
});
