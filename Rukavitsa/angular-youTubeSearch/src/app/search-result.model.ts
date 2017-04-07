export class SearchResult {
    page: number;
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;

    constructor(obj?: any) {
        this.page = obj && obj.page || 0;
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.thumbnailUrl = obj && obj.thumbnailUrl || null;
        this.videoUrl = obj && obj.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;
    }
}
