import { Component } from '@angular/core';
import { UiService } from './services/ui/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontTest020';
  showListUI: boolean

  constructor(uiService: UiService) {
    uiService.filterValue.subscribe(x => this.showListUI = x);
  }

}
