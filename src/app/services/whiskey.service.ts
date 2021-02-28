import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Whiskey } from '../../assets/models/whiskey';

@Injectable({
  providedIn: 'root'
})
export class WhiskeyService {

  constructor(private http: HttpClient) { }

  getAllWhiskies(): Observable<Whiskey[]> {
    return this.http.get<Whiskey[]>('../../assets/whiskey');
  }
}
