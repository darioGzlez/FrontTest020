import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.css']
})
export class SortButtonComponent implements OnInit {

  desc = true;

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
  }

  changeOrder() {
    if (this.desc) {
      this.filterService.setSortValue("asc");
    } else {
      this.filterService.setSortValue("desc");
    }
    this.desc = !this.desc;
  }

}
