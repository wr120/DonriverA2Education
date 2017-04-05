import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemRowComponent } from './item-row/item-row.component';
import { ItemImageComponent } from './item-image/item-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemRowComponent,
    ItemImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide: 'API_KEY', useValue: 'AIzaSyAnhRFgPnbI1UE20OP1uPDk0-RO0v4E3e8' },
    {provide: 'API_URL', useValue: 'https://www.googleapis.com/youtube/v3/search' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
