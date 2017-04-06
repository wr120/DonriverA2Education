import { Observable, Subject } from 'rxjs/Rx';
import { SearchResult } from './search-result.model';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import ngInfiniteScroll from 'ng-infinite-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  @ViewChild('moreBtn', {read: ViewContainerRef}) moreBtn: ViewContainerRef;
  results: SearchResult[];
  loading: boolean;
  clicks: Observable<any>;

  ngOnInit() {
    this.clicks = Observable.fromEvent(this.moreBtn.element.nativeElement, 'click');
  }

  updateResults(results: SearchResult[]): void {
    this.results = results;
  }

  onScrollDown () {
    this.moreBtn.element.nativeElement.click();
  }
}
