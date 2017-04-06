import { SearchResult } from './search-result.model';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Inject, Injectable } from '@angular/core';

export const YOUTUBE_API_KEY = 'AIzaSyBhZHwC1oAhAOnWtR-1FEG0rZ3PTRihj1E';
export const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

@Injectable()
export class YouTubeSearchService {
    pages = 1;
    videos = 12;

    constructor (private http: Http,
                 @Inject(YOUTUBE_API_KEY) private apiKey: string,
                 @Inject(YOUTUBE_API_URL) private apiUrl: string) {}

    search(query: string): Observable<SearchResult[]> {
        const params: string = [
            `q=${query}`,
            `key=${this.apiKey}`,
            'part=snippet',
            'type=video',
            `maxResults=${this.pages * this.videos}`
        ].join('&');
        const queryUrl = `${this.apiUrl}?${params}`;

        return this.http.get(queryUrl)
        .map(response => {
            return (<any>response.json()).items.map(item => {
                return new SearchResult({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnailUrl: item.snippet.thumbnails.high.url
                });
            });
        });
    }

    incrementPages(): void { this.pages++; }
    resetPages(): void { this.pages = 1; }
}
