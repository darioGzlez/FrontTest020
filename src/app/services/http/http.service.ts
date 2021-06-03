import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from 'src/app/models/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseURL = "https://api.punkapi.com/v2/beers";

  constructor(private http: HttpClient) { }

  getBeers(): Observable<[Beer]> {
    return this.http.get<[Beer]>(this.baseURL);
  }

  getBeer(id: string): Observable<Beer> {
    return this.http.get<[Beer]>(`${this.baseURL}/${id}`).pipe(map(beers => beers[0]));
  }

}
