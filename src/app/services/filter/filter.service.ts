import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  public sortValue = new BehaviorSubject<string>('desc');
  public filterValue = new BehaviorSubject<string>('');

  setQueryValue(query: string) {
    this.filterValue.next(query.toUpperCase());
  }

  setSortValue(query: string) {
    this.sortValue.next(query);
  }
  
}
