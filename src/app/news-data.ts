export class NewsData {
    public id: number;
    public title: string;
    public imageUrl: string;
    public content: string;
    public votes: number;

    constructor(
        id: number,
        title: string,
        imageUrl: string,
        content: string,
        votes: number
    ) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.content = content;
        this.votes = votes;
    }
}