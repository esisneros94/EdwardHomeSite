import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Whiskey } from "src/assets/models/whiskey";
import { WhiskeyService } from "./whiskey.service"

describe('The whiskey service', () => {
  let dataService: WhiskeyService;
  let httpTestingController: HttpTestingController;

  let whiskies: Whiskey[] =
  [
    {"whiskeyId": 1, "name": "Glenfiddich 12", "distilleryId": 1, "bottlePrice": 38.99, "whiskeyType": "Single Malt Scotch", "bottleAge": 12},
    {"whiskeyId": 2, "name": "Jack Daniels Tennessee Whiskey", "distilleryId": 2, "bottlePrice": 17.99, "whiskeyType": "Whiskey", "bottleAge": null}
  ];

  beforeEach(()=> {
    TestBed.configureTestingModule({
      providers: [WhiskeyService],
      imports: [HttpClientTestingModule]
    });

    dataService = TestBed.get(WhiskeyService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should return all of the whiskies', () => {

    dataService.getAllWhiskies()
    .subscribe(
      ((data) => expect(data.length).toBe(2))
    );

    const httpMock = httpTestingController.expectOne('../../assets/whiskey.json');
    expect(httpMock.request.method).toEqual("GET");
    httpMock.flush(whiskies);

    httpTestingController.verify();
  })
})
