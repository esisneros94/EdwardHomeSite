import { Component, OnInit } from '@angular/core';
import { Whiskey } from 'src/assets/models/whiskey';
import { Review } from '../review';
import { WhiskeyService } from '../services/whiskey.service';


@Component({
  selector: 'app-whiskey-dashboard',
  templateUrl: './whiskey-dashboard.component.html',
  styleUrls: ['./whiskey-dashboard.component.css']
})
export class WhiskeyDashboardComponent implements OnInit {
  amountOfRecords = 0;
  isTableShowing = true;
  whiskiesReturned: Whiskey[];
  buttonHelper = 'Show Cards'

  constructor(private whiskeyService: WhiskeyService) { }

  ngOnInit() {
    this.whiskeyService.getAllWhiskies().subscribe(
        data => this.whiskiesReturned = data,
        (err: any) => {console.log(err)},
        () => console.log('All done with the processing')
      )

      setTimeout(() => console.log(this.whiskiesReturned[1].name), 4000);
  };

  toggleTableView() {
    this.isTableShowing = !this.isTableShowing;
    if(this.isTableShowing) {
      this.buttonHelper = 'Show Cards';
    }
    else {
      this.buttonHelper = 'Show Table';
    }
  }

}
