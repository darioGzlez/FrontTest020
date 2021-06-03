import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Beer } from 'src/app/models/models';
import { HttpService } from 'src/app/services/http/http.service';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit, OnDestroy {

  options$ = new BehaviorSubject<AnimationOptions>({
    path: '/assets/error.json',
  });

  id: string;
  beer: Beer;
  subscription: Subscription;

  onError = false;

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService, private uiService: UiService) { }

  ngOnInit(): void {
    this.uiService.filterValue.next(false);
    this.id = this.activatedRoute.snapshot.paramMap.get("id") || ''
    if (this.id !== '') {
      this.subscription = this.httpService.getBeer(this.id).subscribe(b => {
        if (b !== undefined) {
          this.beer = b 
        } else {
          this.onError = true;
        }
      }, () =>  this.onError = true);
    } else {
      this.onError = true;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
