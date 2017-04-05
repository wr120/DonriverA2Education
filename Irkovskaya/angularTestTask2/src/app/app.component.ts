import { ViewContainerRef_ } from '@angular/core/src/linker/view_container_ref';
import { Http, Response } from '@angular/http';
import { Videoitem } from './video.item';
import { Observable } from 'rxjs/Rx';
import { Component, Inject, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit{
  items: Videoitem[];
  obsItems: any;
  filters: string[];
  constructor(private http: Http,
              @Inject('API_KEY') private apiKey: string,
              @Inject('API_URL') private apiUrl: string) {
    this.filters = [];
  }
  ngOnInit() {

    const inputField = document.getElementById('search-box');
    const stream$ = Observable.fromEvent(<any>inputField, 'keyup');
    const input$ = stream$.map((ev: any) => ev.target.value);
    const re = /test/gmi;

    input$.filter((text: string) => text.length > 0).filter((v: string) => v.match(re) == null).throttleTime(250)
         .switchMap((filter, index) => {
           return  this.http.get(this.getURLWithParams(filter)).retry(3).map(res => res.json());
          }).subscribe((v: any) => {this.items = v.items.map(item => {
                    return new Videoitem({
                                id: item.id.videoId,
                                title: item.snippet.title,
                                description: item.snippet.description,
                                thumbnailUrl: item.snippet.thumbnails.high.url
                    });
                   }); console.log(this.items);
              });
    input$.filter((text: string) => text.length === 0).subscribe(() => this.items = []);
  }

  getURLWithParams(filter: string) {
     const params: string = [
      `q=${filter}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`;
    return queryUrl;
  }
}
