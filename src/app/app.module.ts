import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

import { HttpClientModule } from '@angular/common/http';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { SortButtonComponent } from './components/sort-button/sort-button.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ItemListComponent,
    ItemDetailComponent,
    ItemCardComponent,
    SearchBarComponent,
    SortButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatButtonModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
