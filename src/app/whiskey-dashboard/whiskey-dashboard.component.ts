import { Component, OnInit } from '@angular/core';
import { Review } from '../review';


@Component({
  selector: 'app-whiskey-dashboard',
  templateUrl: './whiskey-dashboard.component.html',
  styleUrls: ['./whiskey-dashboard.component.css']
})
export class WhiskeyDashboardComponent implements OnInit {
  amountOfRecords = 0;
  isTableShowing = true;
  buttonHelper = 'Show Cards'

  Reviews = [
      new Review(1, 'Monkey Shoulder', 'Scotland', 'Single Malt Scotch', 38.99, 'assets/images/monkeyShoulder.jpeg', 'B', 'A lot of caramel tones'),
      new Review(2, '1792', 'United States', 'Bourbon', 53.99, 'assets/images/1792.jpeg', 'B', 'A whiskey with 50% alcohol content'),
      new Review(3, 'Glenfiddich 12', 'Scotland', 'Scotch', 40.99, 'assets/images/Glenfiddich12.jpeg', 'B', 'Very powerful, smokey'),
      new Review(4, 'Glenlivet 12', 'Scotland', 'Scotch', 32.99, 'assets/images/Glenlivet12.jpeg', 'B', 'Smooth with some hints of oak'),
      new Review(5, 'Screwball PB Whiskey', 'American', 'Whiskey', 17.99, 'assets/images/Screwball.jpeg', 'C', 'It\'s All peanut butter'),
  ];



  constructor() { }

  ngOnInit() {
    this.amountOfRecords = this.Reviews.length;
  }

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
