import { SearchResult } from './search-result.model';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Inject, Injectable } from '@angular/core';

export const YOUTUBE_API_KEY = 'AIzaSyBhZHwC1oAhAOnWtR-1FEG0rZ3PTRihj1E';
export const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

@Injectable()
export class YouTubeSearchService {
    private page = 0;
    private videosPerPage = 12;
    private nextPageToken: string;

    constructor (private http: Http,
                 @Inject(YOUTUBE_API_KEY) private apiKey: string,
                 @Inject(YOUTUBE_API_URL) private apiUrl: string) {}

    search(query: string): Observable<SearchResult[]> {
        let params: string = [
            `q=${query}`,
            `key=${this.apiKey}`,
            'part=snippet',
            'type=video',
            `maxResults=${this.videosPerPage}`
        ].join('&');
        if (this.page > 0) { params = params.concat(`&pageToken=${this.nextPageToken}`); }
        const queryUrl = `${this.apiUrl}?${params}`;

        return this.http.get(queryUrl)
        .map(response => {
            this.nextPageToken = response.json().nextPageToken;
            return response.json().items.map(item => {
                return new SearchResult({
                    page: this.page,
                    id: item.id.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnailUrl: item.snippet.thumbnails.high.url
                });
            });
        });
    }

    incrementPage(): void { this.page++; }
    resetPage(): void { this.page = 0; }
}
