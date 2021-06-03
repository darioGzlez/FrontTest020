import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/models';
import { FilterService } from 'src/app/services/filter/filter.service';
import { HttpService } from 'src/app/services/http/http.service';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  query: string;
  sortOrder: string;

  beers: Beer[] = [];
  allBeers: Beer[] = [];

  constructor(private httpService: HttpService, private filterService: FilterService, private uiService: UiService) { }

  ngOnInit(): void {
    this.uiService.filterValue.next(true);
    
    this.filterService.filterValue.subscribe(query => {
      this.query = query;
      this.prepareBeersList(query);
    });

    this.filterService.sortValue.subscribe(order => {
      this.sortOrder = order;
      this.sortBeers(this.beers);
    });

    this.httpService.getBeers().subscribe(response => {
      this.allBeers = response;
      this.prepareBeersList(this.query);
    });
  }

  prepareBeersList(query: string) {
    var filtered = this.filterBeers(query);
    this.beers = this.sortBeers(filtered);
  }

  filterBeers(query: string): Beer[] {
    if (query.length > 0) {
      return this.allBeers.filter(b => {

        if (b.name.toUpperCase().includes(query)) {
          return true;
        }
  
        if (b.description.toUpperCase().includes(query)) {
          return true;
        }
  
        return false;
      })
    } else {
      return this.allBeers;
    }
  }

  sortBeers(beers: Beer[]): Beer[] {
    return beers.sort((one, two) => {
      if (this.sortOrder == 'asc') {
        return one.name.toUpperCase() > two.name.toUpperCase() ? -1 : 1;
      } else {
        return one.name.toUpperCase() < two.name.toUpperCase() ? -1 : 1;
      }
    });
  }

}
