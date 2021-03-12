import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Distillery } from 'src/assets/models/distillery';

@Injectable({
  providedIn: 'root'
})
export class DistilleryService {

  constructor(private http: HttpClient) { }

  getAllDistilleries(): Observable<Distillery[]> {
    return this.http.get<Distillery[]>('../../assets/distillery.json');
  }

  allDistilleries$ = this.getAllDistilleries();

}
