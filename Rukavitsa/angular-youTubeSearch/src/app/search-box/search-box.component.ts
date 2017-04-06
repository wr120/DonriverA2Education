import { Observable } from 'rxjs/Rx';
import { YouTubeSearchService } from '../you-tube-search.service';
import { SearchResult } from '../search-result.model';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  template: '<input type="text" class="form-control" placeholder="Search" autofocus>',
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();
  @Input() moreClicks: Observable<any>;
  onNext = ((next: SearchResult[]) => {
    this.loading.next(false);
    this.results.next(next);
  });
  onErr = ((err: any) => {
    console.log('err');
    this.loading.next(false);
  });
  onComplete = (() => {this.loading.next(false); });

  constructor(private youtube: YouTubeSearchService,
              private el: ElementRef) { }

  ngOnInit() {
    let searchQuery: string;
    Observable.fromEvent(this.el.nativeElement, 'keyup')
    .map((e: any) => e.target.value)
    .filter((text: string) => text.length > 1)
    .debounceTime(500)
    .do(() => {
      this.youtube.resetPages();
      return this.loading.next(true);
    })
    .map((query: string) => {
      searchQuery = query;
      return this.youtube.search(query);
    })
    .switch()
    .subscribe(this.onNext, this.onErr, this.onComplete);

    this.moreClicks.subscribe(() => {
      this.youtube.incrementPages();
      this.youtube.search(searchQuery)
      .subscribe(this.onNext, this.onErr, this.onComplete);
    });
  }

}
