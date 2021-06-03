import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  public filterValue = new BehaviorSubject<boolean>(true);

  constructor() { }
  
}
