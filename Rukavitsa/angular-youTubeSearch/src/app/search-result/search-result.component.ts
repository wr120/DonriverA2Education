import { SearchResult } from '../search-result.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html'
})
export class SearchResultComponent implements OnInit {
  @Input() result: SearchResult;

  constructor() { }

  ngOnInit() {
  }

}
