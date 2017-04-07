import { InfiniteScrollEvent } from 'angular2-infinite-scroll';
import { Observable, Subject } from 'rxjs/Rx';
import { SearchResult } from './search-result.model';
import { Component, EventEmitter, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import ngInfiniteScroll from 'ng-infinite-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  // @ViewChild('moreBtn', {read: ViewContainerRef}) moreBtn: ViewContainerRef;
  // clicks: Observable<any>;
  results: SearchResult[];
  loading: boolean;
  more = new EventEmitter();

  ngOnInit() {
    // this.clicks = Observable.fromEvent(this.moreBtn.element.nativeElement, 'click');
  }

  updateResults(results: SearchResult[]): void {
    if (!results[0]) { return; }
    if (results[0].page === 0) {
      this.results = results;
    } else {
      this.results = this.results.concat(results);
    }
  }

}
