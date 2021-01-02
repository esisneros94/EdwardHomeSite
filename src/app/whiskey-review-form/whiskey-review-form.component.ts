import { Component, OnInit } from '@angular/core';
import { WhiskeyFormData } from '../data/whiskey-form-data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-whiskey-review-form',
  templateUrl: './whiskey-review-form.component.html',
  styleUrls: ['./whiskey-review-form.component.css']
})
export class WhiskeyReviewFormComponent implements OnInit {

  WhiskeyForm: WhiskeyFormData = {
    WhiskeyName: null,
    WhiskeyCountry: null,
    WhiskeyType: null,
    BottlePrice: null,
    WhiskeyGrade: null,
    WhiskeyImage: null,
    Comments: null,
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log('in onSubmit', form.valid);
  }

}

