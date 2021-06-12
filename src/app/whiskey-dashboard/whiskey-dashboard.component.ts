import { Component, OnInit } from '@angular/core';
import { Whiskey } from 'src/assets/models/whiskey';
import { WhiskeyService } from '../services/whiskey.service';
import { DistilleryService } from '../services/distillery.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-whiskey-dashboard',
  templateUrl: './whiskey-dashboard.component.html',
  styleUrls: ['./whiskey-dashboard.component.css']
})
export class WhiskeyDashboardComponent implements OnInit{
  amountOfRecords = 0;
  isTableShowing = true;
  columnsToDisplay: string[] = ['image', 'name', 'country', 'price', 'type', 'grade'];
  WhiskeyTableElements = Array<Whiskey>();
  buttonHelper = 'Show Cards'


  toggleTableView() {
    this.isTableShowing = !this.isTableShowing;
    if(this.isTableShowing) {
      this.buttonHelper = 'Show Cards';
    }
    else {
      this.buttonHelper = 'Show Table';
    }
  }

  whiskeysWithDistilleries$ = combineLatest([
    this.whiskeyService.allWhiskeys$,
    this.distilleryService.allDistilleries$
  ]).pipe(
    map(([whiskies, distilleries]) =>
      whiskies.map(whiskey => ({
        ...whiskey,
        distilleryName: distilleries.find(d => d.distilleryId === whiskey.distilleryId).name,
        distilleryCountry: distilleries.find(d => d.distilleryId === whiskey.distilleryId).country
      }) as Whiskey ))
  );


  ngOnInit() {
    this.whiskeysWithDistilleries$.subscribe(
      (data => this.WhiskeyTableElements = data)
    )
  }

  constructor(private http: HttpClient, private whiskeyService: WhiskeyService, private distilleryService: DistilleryService) { }
}
