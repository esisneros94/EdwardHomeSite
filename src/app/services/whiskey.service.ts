import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Whiskey } from '../../assets/models/whiskey';
import { DistilleryService } from './distillery.service';
import { map, combineLatest, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WhiskeyService {

  allWhiskeys$ = this.http.get<Whiskey[]>('../../assets/whiskey.json').pipe();

  constructor(private http: HttpClient, private distilleryService: DistilleryService) { }
}
