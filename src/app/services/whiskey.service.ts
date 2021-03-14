import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Whiskey } from '../../assets/models/whiskey';
import { DistilleryService } from './distillery.service';

@Injectable({
  providedIn: 'root'
})
export class WhiskeyService {

  getAllWhiskies(): Observable<Whiskey[]> {
    return this.http.get<Whiskey[]>('../../assets/whiskey.json');
  }

  allWhiskeys$ = this.getAllWhiskies();

  constructor(private http: HttpClient, private distilleryService: DistilleryService) { }
}
